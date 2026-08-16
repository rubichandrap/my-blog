export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: number;
  tags: string[];
  coverImage: string;
  content: string;
  featured: boolean;
}

// Blog posts
const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-the-cap-theorem',
    title: 'Understanding the CAP Theorem in Distributed Systems',
    date: 'May 1, 2023',
    excerpt:
      'A practical look at the CAP theorem: what consistency, availability, and partition tolerance mean, and how real systems choose between them.',
    readingTime: 2,
    tags: ['Distributed Systems', 'CAP Theorem', 'Architecture'],
    coverImage: '',
    content: `<p>
    Eric Brewer introduced the CAP theorem in 2000. It says a distributed data
    system can guarantee only two of three properties at the same time:
    consistency, availability, and partition tolerance.
  </p>

  <ol>
    <li><strong>Consistency</strong>: every read returns the most recent write, or an error.</li>
    <li><strong>Availability</strong>: every request receives a response, even if the data is not the most recent.</li>
    <li><strong>Partition tolerance</strong>: the system keeps operating while network communication between nodes is broken.</li>
  </ol>

  <h2>Why you can only pick two</h2>

  <p>
    During a partition, nodes cannot reach each other. A node that receives a
    request has two options: answer with the data it has, or refuse to answer
    until it can confirm the data is current. It cannot do both. Partitions are
    not a question of if but when, so practical systems assume partition
    tolerance and choose between consistency and availability.
  </p>

  <h2>CP and AP in practice</h2>

  <p>
    A CP system may reject requests during a partition rather than serve stale
    data. An AP system keeps responding, possibly with data that is out of date.
    The databases most teams use sit on one side of this choice:
  </p>

  <ul>
    <li><strong>CP</strong>: HBase, BigTable, Zookeeper, etcd</li>
    <li><strong>AP</strong>: MongoDB, CouchDB, DynamoDB (with tunable consistency)</li>
  </ul>

  <h2>Choosing per operation</h2>

  <p>
    The right trade-off depends on the operation. A bank transfer should be CP:
    better to return an error than to let the same balance be spent twice. An
    e-commerce cart can be AP: a user adds an item and it succeeds even when the
    backend cannot confirm the latest state right away.
  </p>

  <p>
    CAP is a model, not a law. Systems with tunable consistency pick a level per
    operation — strong consistency for payments, eventual consistency for
    analytics — so the choice is rarely a single setting for the whole system.
  </p>`,
    featured: true,
  },
  {
    slug: 'gleam-concurrency-vs-typescript',
    title: "Learning Gleam Concurrency: A TypeScript Developer's Journey",
    date: 'October 21, 2025',
    excerpt:
      'Actor-based concurrency in Gleam vs async/await in TypeScript: two problems solved in both languages, and what the actor model changes.',
    readingTime: 3,
    tags: [
      'Gleam',
      'Concurrency',
      'TypeScript',
      'Functional Programming',
      'Learning',
    ],
    coverImage: '',
    content: `<p>
    I wrote async/await TypeScript for years before I tried Gleam. Its
    concurrency model is different enough that it took me a while to stop
    thinking in promises. These are two problems I solved in both languages, and
    what the actor model changed for me.
  </p>

  <h2>The TypeScript way</h2>

  <p>
    In TypeScript, concurrent work is orchestrated with <code>async/await</code>
    and <code>Promise</code>. State is shared across async boundaries, which
    means you think about who can mutate what, and when:
  </p>

  <pre><code>// TypeScript: fetch a user and their posts and comments
async function fetchUserData(userId: string): Promise<User> {
  const user = await fetchUser(userId);
  const posts = await fetchUserPosts(userId);
  const comments = await fetchUserComments(userId);

  return {
    ...user,
    posts,
    comments
  };
}

// What if one of these fails?
// What if we want to cancel the whole operation?
// What if we need to share state between these calls?</code></pre>

  <p>
    Gleam takes a different route: actors. An actor is a lightweight process that
    owns its state and communicates only by sending and receiving messages. No
    shared state, no locks, no race conditions — the only way in or out is a
    message.
  </p>

  <h2>Example 1: a chat system</h2>

  <p>
    A chat room tracks users and messages and broadcasts new messages to
    everyone. In TypeScript that means a mutable collection plus care around
    concurrent updates and broadcast failures:
  </p>

  <pre><code>// TypeScript: managing state and async operations
class ChatRoom {
  private messages: Message[] = [];
  private users: Set<string> = new Set();

  async addMessage(userId: string, content: string): Promise<void> {
    // What if another message is being added at the same time?
    // What if the user gets disconnected while we're processing?
    const message: Message = {
      id: crypto.randomUUID(),
      userId,
      content,
      timestamp: Date.now()
    };

    this.messages.push(message);
    await this.broadcastToUsers(message);
  }

  private async broadcastToUsers(message: Message): Promise<void> {
    // Async broadcasting - what if this fails?
    const promises = Array.from(this.users).map(userId =>
      this.sendToUser(userId, message)
    );
    await Promise.all(promises);
  }
}</code></pre>

  <p>
    Every method that touches the room has to handle the same questions:
    ordering of concurrent updates, failures mid-broadcast, who owns the state.
  </p>

  <h3>Gleam approach</h3>

  <pre><code>// Gleam: actor-based chat system
import gleam/io
import gleam/result

// Define our message types
pub type ChatMessage {
  UserMessage(user_id: String, content: String)
  JoinRoom(user_id: String)
  LeaveRoom(user_id: String)
}

pub type ChatRoom {
  ChatRoom(messages: List(String), users: List(String))
}

// Our chat room actor
pub fn chat_room_loop(state: ChatRoom) -> Nil {
  case receive() {
    UserMessage(user_id, content) -> {
      let message = "User " <> user_id <> ": " <> content
      let new_messages = [message, ..state.messages]
      let new_state = ChatRoom(new_messages, state.users)

      // Broadcast to all users
      broadcast_message(message, state.users)
      chat_room_loop(new_state)
    }
    JoinRoom(user_id) -> {
      let new_users = [user_id, ..state.users]
      let new_state = ChatRoom(state.messages, new_users)
      chat_room_loop(new_state)
    }
    LeaveRoom(user_id) -> {
      let new_users = list.filter(state.users, fn(u) { u != user_id })
      let new_state = ChatRoom(state.messages, new_users)
      chat_room_loop(new_state)
    }
  }
}

fn broadcast_message(message: String, users: List(String)) -> Nil {
  // Each user gets their own actor to handle messages
  list.foreach(users, fn(user_id) {
    send(user_id, message)
  })
}</code></pre>

  <p>
    The room is a loop that owns the state and changes it only through messages.
    There is nothing to lock, because no other process can see the state at all.
  </p>

  <h2>Example 2: a game score system</h2>

  <p>
    A multiplayer game needs concurrent score updates without losing points. In
    TypeScript, shared mutable state means a lock around every access:
  </p>

  <pre><code>// TypeScript: managing concurrent score updates
class GameScore {
  private scores: Map<string, number> = new Map();
  private lock = new Mutex(); // Need to prevent race conditions!

  async addScore(playerId: string, points: number): Promise<void> {
    await this.lock.acquire();
    try {
      const currentScore = this.scores.get(playerId) || 0;
      this.scores.set(playerId, currentScore + points);
    } finally {
      this.lock.release();
    }
  }

  async getTopPlayers(limit: number): Promise<PlayerScore[]> {
    await this.lock.acquire();
    try {
      return Array.from(this.scores.entries())
        .map(([playerId, score]) => ({ playerId, score }))
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
    } finally {
      this.lock.release();
    }
  }
}</code></pre>

  <p>
    The lock makes the updates safe, but it is bookkeeping you have to get right
    on every method that touches the scores.
  </p>

  <h3>Gleam approach</h3>

  <pre><code>// Gleam: actor-based score system
import gleam/list
import gleam/string

pub type ScoreMessage {
  AddScore(player_id: String, points: Int)
  GetTopPlayers(limit: Int, reply_to: Pid)
  GetPlayerScore(player_id: String, reply_to: Pid)
}

pub type ScoreState {
  ScoreState(scores: List(#(String, Int)))
}

pub fn score_actor_loop(state: ScoreState) -> Nil {
  case receive() {
    AddScore(player_id, points) -> {
      let new_scores = update_player_score(state.scores, player_id, points)
      let new_state = ScoreState(new_scores)
      score_actor_loop(new_state)
    }
    GetTopPlayers(limit, reply_to) -> {
      let top_players = get_top_players(state.scores, limit)
      send(reply_to, top_players)
      score_actor_loop(state)
    }
    GetPlayerScore(player_id, reply_to) -> {
      let player_score = get_player_score(state.scores, player_id)
      send(reply_to, player_score)
      score_actor_loop(state)
    }
  }
}

fn update_player_score(scores: List(#(String, Int)), player_id: String, points: Int) -> List(#(String, Int)) {
  // Update or add player score
  case list.find(scores, fn(score) { score.0 == player_id }) {
    Ok((_, current_points)) -> {
      let new_score = #(player_id, current_points + points)
      list.replace(scores, #(player_id, current_points), new_score)
    }
    Error(_) -> {
      // Player not found, add new score
      [#(player_id, points), ..scores]
    }
  }
}</code></pre>

  <p>
    The score state belongs to one actor. Updates arrive as messages and are
    applied in order, so no lock is needed. Queries are messages too, with a
    reply address attached.
  </p>

  <h2>What the actor model changes</h2>

  <ul>
    <li><strong>No shared state</strong>: two actors cannot touch the same data at the same time, because there is no shared data to touch.</li>
    <li><strong>Fault isolation</strong>: a crashed actor does not bring down the rest of the program; other actors keep running.</li>
    <li><strong>Testability</strong>: an actor is exercised by sending it messages and checking the replies, no mocking of shared state.</li>
    <li><strong>No nesting</strong>: no chains of await and Promise.all; interaction is a flat loop of receive and send.</li>
  </ul>

  <h2>When to use which</h2>

  <p>
    Async/await in TypeScript is the right tool when you are integrating with
    the JavaScript ecosystem, building a straightforward CRUD application, or
    working with a team that thinks in imperative code. Gleam actors fit when
    the system is highly concurrent, needs fault tolerance, or handles real-time
    data — anywhere shared mutable state is the main source of bugs.
  </p>

  <p>
    Neither model is better in general. But most concurrent systems I have built
    are naturally described as message flows, which is exactly what actors
    model. If you come from TypeScript, that is a good reason to try Gleam.
  </p>`,
    featured: true,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  // In a real application, this would fetch from a database or API
  return blogPosts.sort((a, b) => {
    // Sort by date (newest first)
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
