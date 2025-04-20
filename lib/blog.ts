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

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-the-cap-theorem',
    title: 'Understanding the CAP Theorem in Distributed Systems',
    date: 'May 1, 2023',
    excerpt:
      'A deep dive into the CAP theorem and its implications for distributed systems design.',
    readingTime: 10,
    tags: ['Distributed Systems', 'CAP Theorem', 'Architecture'],
    coverImage: 'https://picsum.photos/seed/understanding-cap-theorem/1200/630',
    content: `<h1>📚 Understanding the CAP Theorem: Why It Matters in Distributed Systems</h1>

  <p>
    When building or maintaining distributed systems—whether it's a global-scale web application, a microservices architecture, or a cloud-based platform—you’ll eventually run into the <strong>CAP Theorem</strong>. It’s one of those core principles that’s easy to overlook, but absolutely essential to get right if you want your system to be <strong>reliable</strong>, <strong>available</strong>, and <strong>performant</strong>.
  </p>

  <h2>🧠 What is the CAP Theorem?</h2>

  <p>
    The <strong>CAP Theorem</strong>, introduced by computer scientist <em>Eric Brewer</em> in 2000, states that in any <strong>distributed data system</strong>, you can only guarantee <strong>two out of the following three properties</strong> at the same time:
  </p>

  <ol>
    <li><strong>Consistency (C)</strong> – Every read receives the most recent write or an error.</li>
    <li><strong>Availability (A)</strong> – Every request receives a response, even if it’s not the most recent one.</li>
    <li><strong>Partition Tolerance (P)</strong> – The system continues to operate despite network partitions (communication issues between nodes).</li>
  </ol>

  <blockquote>
    <strong>TL;DR:</strong> You can’t have <em>all three</em> at once. At best, you choose <em>two</em>, and sacrifice the third depending on your system’s goals.
  </blockquote>

  <h2>📊 Visualizing the Trade-off</h2>

  <p>
    Imagine a triangle where each corner represents C, A, and P:
  </p>

  <ul>
    <li><strong>CA (Consistency + Availability)</strong>: Only works if there's no network partition—unrealistic in distributed environments.</li>
    <li><strong>CP (Consistency + Partition Tolerance)</strong>: The system may become unavailable during a partition to maintain consistency.</li>
    <li><strong>AP (Availability + Partition Tolerance)</strong>: The system stays up but may return stale or inconsistent data.</li>
  </ul>

  <p>
    Since network partitions <em>will</em> happen, we always assume <strong>Partition Tolerance</strong> is necessary. That means choosing between <strong>Consistency</strong> and <strong>Availability</strong>.
  </p>

  <h2>🧩 Why Is It Important?</h2>

  <h3>1. System Design Decisions</h3>
  <p>
    Understanding CAP helps you make architectural trade-offs. Do you value strict data consistency (e.g., in financial systems) or high availability (e.g., in social apps)?
  </p>

  <h3>2. Choose the Right Database</h3>
  <p>
    Different databases favor different CAP combinations:
  </p>
  <ul>
    <li><strong>MongoDB, CouchDB</strong> → AP</li>
    <li><strong>HBase, BigTable</strong> → CP</li>
    <li><strong>Zookeeper, etcd</strong> → CP</li>
    <li><strong>DynamoDB</strong> → AP with tunable consistency</li>
  </ul>

  <h3>3. Prepare for Failures Gracefully</h3>
  <p>
    Knowing CAP helps you plan fallback mechanisms, retries, and error handling suited to your system's tolerance.
  </p>

  <h3>4. Set Realistic Expectations</h3>
  <p>
    You can’t promise 100% consistency and availability during a network issue. CAP helps set realistic boundaries for stakeholders.
  </p>

  <h2>🚧 Real-World Examples</h2>

  <ul>
    <li><strong>Banking Systems (CP)</strong>: Consistency is critical. It’s better to return an error than serve outdated info.</li>
    <li><strong>E-Commerce Cart (AP)</strong>: Users can still add items even if the backend can’t confirm the latest state right away.</li>
  </ul>

  <h2>⚖️ CAP is a Guideline, Not a Law</h2>

  <p>
    CAP is a <em>theoretical model</em>. Many real-world systems implement <strong>tunable consistency</strong>, letting you choose the right behavior depending on the operation (e.g., strong consistency for payments, eventual consistency for analytics).
  </p>

  <h2>🧠 Takeaway</h2>

  <p>
    If you’re building or maintaining distributed systems, <strong>you can’t ignore CAP</strong>. It helps you design systems that balance consistency, availability, and resilience under failure.
  </p>

  <p>
    So next time someone asks about consistency vs availability, you’ll know it’s not just theory—it’s the foundation of practical system design.
  </p>`,
    featured: true,
  },
  {
    slug: 'modern-react-state-management',
    title: 'Modern React State Management: Beyond Redux',
    date: 'April 15, 2023',
    excerpt:
      'Exploring modern state management solutions in React applications and when to use each approach.',
    readingTime: 8,
    tags: ['React', 'JavaScript', 'State Management', 'Frontend'],
    coverImage:
      'https://picsum.photos/seed/modern-react-state-management/1200/630',
    content: `
      <p>State management is one of the most critical aspects of building React applications. For years, Redux has been the go-to solution for managing state in complex React applications. However, the React ecosystem has evolved significantly, and there are now several alternatives that might be better suited for your specific use case.</p>
      
      <h2>The Evolution of State Management in React</h2>
      <p>When React was first introduced, component state was the primary way to manage state. As applications grew more complex, patterns like prop drilling emerged, leading to the development of more sophisticated state management solutions.</p>
      
      <h3>Context API + useReducer</h3>
      <p>With the introduction of Hooks in React 16.8, the Context API combined with useReducer became a powerful alternative to Redux for many applications. This approach provides a way to share state across components without prop drilling, while maintaining a predictable state update pattern similar to Redux.</p>
      
      <pre><code>// Example of Context API with useReducer
import React, { createContext, useReducer, useContext } from 'react';

const CounterContext = createContext();

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}</code></pre>
      
      <h3>Zustand</h3>
      <p>Zustand is a small, fast, and scalable state management solution. It uses a simplified flux principles and doesn't require providers, making it very easy to use.</p>
      
      <h3>Jotai</h3>
      <p>Jotai takes an atomic approach to state management, allowing you to build state by combining atoms. This makes it particularly well-suited for applications with frequently changing UI states.</p>
      
      <h2>When to Use Each Solution</h2>
      <p>The best state management solution depends on your specific requirements:</p>
      <ul>
        <li><strong>useState</strong>: For simple component-level state that doesn't need to be shared.</li>
        <li><strong>Context + useReducer</strong>: For sharing state across components in a medium-sized application.</li>
        <li><strong>Redux</strong>: For large applications with complex state logic and many developers.</li>
        <li><strong>Zustand/Jotai</strong>: For applications that need a lightweight solution with good performance.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The React ecosystem now offers a variety of state management solutions, each with its own strengths. By understanding the trade-offs between these options, you can choose the right tool for your specific needs, leading to more maintainable and performant applications.</p>
    `,
    featured: true,
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Large-Scale Applications',
    date: 'March 10, 2023',
    excerpt:
      'Learn how to effectively use TypeScript to build maintainable and scalable applications.',
    readingTime: 10,
    tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Architecture'],
    coverImage: 'https://picsum.photos/seed/typescript-best-practices/1200/630',
    content: `
      <p>TypeScript has become the language of choice for many developers building large-scale applications. Its static typing system helps catch errors early and provides better tooling support. However, using TypeScript effectively requires following certain best practices.</p>
      
      <h2>Type Everything (Almost)</h2>
      <p>One of the main benefits of TypeScript is its type system. To get the most out of it, you should type as much of your code as possible. This includes function parameters, return types, and variables.</p>
      
      <pre><code>// Bad
function processUser(user) {
  return {
    id: user.id,
    name: user.name,
    isActive: user.status === 'active'
  };
}

// Good
interface User {
  id: string;
  name: string;
  status: 'active' | 'inactive';
}

interface ProcessedUser {
  id: string;
  name: string;
  isActive: boolean;
}

function processUser(user: User): ProcessedUser {
  return {
    id: user.id,
    name: user.name,
    isActive: user.status === 'active'
  };
}</code></pre>
      
      <h2>Use Strict Mode</h2>
      <p>Enable strict mode in your tsconfig.json to catch more potential issues:</p>
      
      <pre><code>{
  "compilerOptions": {
    "strict": true,
    // Other options...
  }
}</code></pre>
      
      <h2>Leverage Union Types and Discriminated Unions</h2>
      <p>Union types are a powerful feature of TypeScript that allows a value to be one of several types. Discriminated unions take this a step further by adding a common property that TypeScript can use to narrow down the type.</p>
      
      <pre><code>// Union type
type Result = Success | Error;

// Discriminated union
interface Success {
  type: 'success';
  data: any;
}

interface Error {
  type: 'error';
  message: string;
}

function handleResult(result: Result) {
  if (result.type === 'success') {
    // TypeScript knows result is Success here
    console.log(result.data);
  } else {
    // TypeScript knows result is Error here
    console.error(result.message);
  }
}</code></pre>
      
      <h2>Use Type Inference When Appropriate</h2>
      <p>While explicit typing is generally good, TypeScript's type inference is quite powerful. Use it when the types are obvious to avoid unnecessary verbosity.</p>
      
      <pre><code>// Unnecessary explicit typing
const numbers: number[] = [1, 2, 3].map((num: number): number => num * 2);

// Better - let TypeScript infer the types
const numbers = [1, 2, 3].map(num => num * 2);</code></pre>
      
      <h2>Organize Types in Separate Files</h2>
      <p>For large applications, organize your types in separate files to improve maintainability. Consider creating a types directory with subdirectories for different domains of your application.</p>
      
      <h2>Use Utility Types</h2>
      <p>TypeScript provides several utility types that can help you transform existing types in useful ways:</p>
      
      <pre><code>interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

// Create a type with all properties optional
type PartialUser = Partial<User>;

// Create a type with only specified properties
type UserBasicInfo = Pick<User, 'id' | 'name'>;

// Create a type excluding specified properties
type UserWithoutDates = Omit<User, 'createdAt'>;</code></pre>
      
      <h2>Conclusion</h2>
      <p>By following these best practices, you can leverage TypeScript effectively to build more maintainable and robust applications. Remember that the goal of TypeScript is to enhance your development experience and catch errors early, not to make your code more complex.</p>
    `,
    featured: true,
  },
  {
    slug: 'microservices-architecture',
    title: 'Microservices Architecture: Patterns and Pitfalls',
    date: 'February 5, 2023',
    excerpt:
      'An in-depth look at microservices architecture patterns and common pitfalls to avoid.',
    readingTime: 12,
    tags: ['Architecture', 'Microservices', 'Backend', 'System Design'],
    coverImage:
      'https://picsum.photos/seed/microservices-architecture/1200/630',
    content: `
      <p>Microservices architecture has become increasingly popular for building complex, scalable applications. By breaking down a monolithic application into smaller, independent services, teams can develop, deploy, and scale services independently. However, implementing microservices comes with its own set of challenges.</p>
      
      <h2>Key Patterns in Microservices Architecture</h2>
      
      <h3>API Gateway Pattern</h3>
      <p>An API Gateway serves as a single entry point for all clients. It handles requests in one of two ways: some requests are simply proxied/routed to the appropriate service, while others are fanned out to multiple services.</p>
      
      <h3>Database per Service</h3>
      <p>Each microservice should have its own database to ensure loose coupling. This allows each service to use the type of database best suited to its needs.</p>
      
      <h3>Event Sourcing</h3>
      <p>Event sourcing involves storing all changes to the application state as a sequence of events. This can be particularly useful in microservices architectures for maintaining data consistency across services.</p>
      
      <h3>CQRS (Command Query Responsibility Segregation)</h3>
      <p>CQRS separates read and write operations to different models. This can improve performance, scalability, and security while making the system more maintainable.</p>
      
      <h3>Circuit Breaker Pattern</h3>
      <p>The circuit breaker pattern prevents a cascade of failures when a service is down. It detects failures and encapsulates the logic of preventing a failure from constantly recurring.</p>
      
      <h2>Common Pitfalls to Avoid</h2>
      
      <h3>Starting with Microservices</h3>
      <p>One of the biggest mistakes is starting with microservices before understanding the domain well enough. It's often better to start with a monolith and extract microservices as the domain boundaries become clearer.</p>
      
      <h3>Ignoring Data Consistency</h3>
      <p>In a microservices architecture, maintaining data consistency across services is challenging. Implementing patterns like Saga or using eventual consistency is crucial.</p>
      
      <h3>Overlooking Monitoring and Observability</h3>
      <p>With multiple services communicating with each other, proper monitoring, logging, and tracing become essential for debugging and performance optimization.</p>
      
      <h3>Inappropriate Service Boundaries</h3>
      <p>Defining service boundaries based on technical concerns rather than business capabilities can lead to tightly coupled services that are difficult to maintain.</p>
      
      <h3>Distributed Monolith</h3>
      <p>If microservices are tightly coupled and cannot be deployed independently, you end up with a distributed monolith—combining the complexity of microservices with the rigidity of a monolith.</p>
      
      <h2>When to Use Microservices</h2>
      <p>Microservices are not a silver bullet. They are most beneficial when:</p>
      <ul>
        <li>The application is complex enough to warrant separation of concerns</li>
        <li>Different parts of the application have different scaling requirements</li>
        <li>The team is large enough to work on separate services</li>
        <li>The organization values the ability to deploy services independently</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Microservices architecture offers significant benefits for complex applications, but it comes with its own set of challenges. By understanding common patterns and avoiding typical pitfalls, you can successfully implement a microservices architecture that meets your organization's needs.</p>
    `,
    featured: true,
  },
  {
    slug: 'web-performance-optimization',
    title: 'Web Performance Optimization Techniques for Modern Applications',
    date: 'January 20, 2023',
    excerpt:
      "Learn how to optimize your web application's performance for better user experience and higher conversion rates.",
    readingTime: 9,
    tags: ['Performance', 'Web Development', 'Frontend', 'Optimization'],
    coverImage:
      'https://picsum.photos/seed/web-performance-optimization/1200/630',
    content: `
      <p>Web performance has a direct impact on user experience and business metrics. Studies have shown that even a one-second delay in page load time can result in a 7% reduction in conversions. In this article, we'll explore various techniques to optimize web performance.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Google's Core Web Vitals are a set of specific factors that Google considers important for user experience:</p>
      <ul>
        <li><strong>Largest Contentful Paint (LCP)</strong>: Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
        <li><strong>First Input Delay (FID)</strong>: Measures interactivity. Pages should have a FID of less than 100 milliseconds.</li>
        <li><strong>Cumulative Layout Shift (CLS)</strong>: Measures visual stability. Pages should maintain a CLS of less than 0.1.</li>
      </ul>
      
      <h2>Image Optimization</h2>
      <p>Images often account for most of the downloaded bytes on a web page. Optimizing them can significantly improve performance:</p>
      
      <h3>Use Modern Image Formats</h3>
      <p>WebP, AVIF, and JPEG XL offer better compression than traditional formats like JPEG and PNG.</p>
      
      <h3>Responsive Images</h3>
      <p>Use the srcset attribute to provide different image sizes for different devices:</p>
      
      <pre><code>&lt;img 
  srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" 
  sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px" 
  src="fallback.jpg" 
  alt="Description"
&gt;</code></pre>
      
      <h3>Lazy Loading</h3>
      <p>Load images only when they're about to enter the viewport:</p>
      
      <pre><code>&lt;img src="image.jpg" loading="lazy" alt="Description"&gt;</code></pre>
      
      <h2>JavaScript Optimization</h2>
      
      <h3>Code Splitting</h3>
      <p>Split your JavaScript bundle into smaller chunks that can be loaded on demand:</p>
      
      <pre><code>// Using dynamic import in React
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}</code></pre>
      
      <h3>Tree Shaking</h3>
      <p>Remove unused code from your JavaScript bundles. Most modern bundlers like Webpack, Rollup, and esbuild support tree shaking.</p>
      
      <h3>Defer Non-Critical JavaScript</h3>
      <p>Use the defer attribute to prevent JavaScript from blocking the parsing of HTML:</p>
      
      <pre><code>&lt;script src="non-critical.js" defer&gt;&lt;/script&gt;</code></pre>
      
      <h2>CSS Optimization</h2>
      
      <h3>Critical CSS</h3>
      <p>Inline critical CSS in the head of your HTML to reduce render-blocking:</p>
      
      <pre><code>&lt;head&gt;
  &lt;style&gt;
    /* Critical CSS here */
    body { font-family: sans-serif; margin: 0; }
    header { background-color: #f8f9fa; padding: 1rem; }
  &lt;/style&gt;
  &lt;link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'"&gt;
&lt;/head&gt;</code></pre>
      
      <h3>Reduce Unused CSS</h3>
      <p>Tools like PurgeCSS can remove unused CSS from your stylesheets.</p>
      
      <h2>Caching Strategies</h2>
      
      <h3>HTTP Caching</h3>
      <p>Use appropriate Cache-Control headers to leverage browser caching:</p>
      
      <pre><code>Cache-Control: max-age=31536000, immutable</code></pre>
      
      <h3>Service Workers</h3>
      <p>Implement a service worker to cache assets and enable offline functionality:</p>
      
      <pre><code>// Register a service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Web performance optimization is an ongoing process. By focusing on Core Web Vitals and implementing the techniques discussed in this article, you can significantly improve your web application's performance, leading to better user experience and higher conversion rates.</p>
    `,
    featured: false,
  },
  {
    slug: 'serverless-architecture',
    title: 'Serverless Architecture: Benefits and Challenges',
    date: 'December 12, 2022',
    excerpt:
      'Explore the benefits and challenges of serverless architecture and how it can transform your application development.',
    readingTime: 7,
    tags: ['Serverless', 'Cloud Computing', 'Architecture', 'AWS Lambda'],
    coverImage: 'https://picsum.photos/seed/serverless-architecture/1200/630',
    content: `
      <p>Serverless architecture has gained significant popularity in recent years. Despite its name, serverless doesn't mean there are no servers; it means that developers don't have to manage servers. Instead, cloud providers handle the infrastructure, allowing developers to focus solely on writing code.</p>
      
      <h2>Benefits of Serverless Architecture</h2>
      
      <h3>Reduced Operational Costs</h3>
      <p>With serverless, you only pay for the compute time you consume. There's no charge when your code isn't running, making it cost-effective for applications with variable traffic.</p>
      
      <h3>Automatic Scaling</h3>
      <p>Serverless platforms automatically scale your application in response to traffic. You don't need to provision resources in advance or implement auto-scaling logic.</p>
      
      <h3>Faster Time to Market</h3>
      <p>By eliminating the need to manage infrastructure, serverless allows developers to focus on business logic, leading to faster development cycles.</p>
      
      <h3>Reduced Operational Complexity</h3>
      <p>With serverless, you don't have to worry about server maintenance, security patches, or operating system updates.</p>
      
      <h2>Challenges of Serverless Architecture</h2>
      
      <h3>Cold Starts</h3>
      <p>When a function hasn't been invoked for a while, the cloud provider might shut down its container. The next invocation will require starting a new container, leading to increased latency known as a "cold start."</p>
      
      <h3>Vendor Lock-in</h3>
      <p>Serverless offerings vary between cloud providers, and migrating from one provider to another can be challenging.</p>
      
      <h3>Limited Execution Duration</h3>
      <p>Most serverless platforms have a maximum execution duration for functions. For example, AWS Lambda functions can run for up to 15 minutes.</p>
      
      <h3>Debugging and Monitoring</h3>
      <p>Debugging serverless applications can be more complex due to their distributed nature. Proper monitoring and logging are essential.</p>
      
      <h2>Popular Serverless Platforms</h2>
      
      <h3>AWS Lambda</h3>
      <p>AWS Lambda is one of the most popular serverless platforms. It supports multiple languages and integrates seamlessly with other AWS services.</p>
      
      <h3>Azure Functions</h3>
      <p>Microsoft's serverless offering, Azure Functions, supports a wide range of languages and integrates well with the Azure ecosystem.</p>
      
      <h3>Google Cloud Functions</h3>
      <p>Google Cloud Functions is Google's serverless platform, offering tight integration with other Google Cloud services.</p>
      
      <h3>Vercel</h3>
      <p>Vercel provides a serverless platform optimized for frontend applications, with a focus on Next.js deployments.</p>
      
      <h2>When to Use Serverless</h2>
      <p>Serverless architecture is particularly well-suited for:</p>
      <ul>
        <li>Applications with variable or unpredictable traffic</li>
        <li>Microservices architectures</li>
        <li>Event-driven applications</li>
        <li>APIs with low to moderate traffic</li>
        <li>Background processing tasks</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Serverless architecture offers significant benefits in terms of cost, scalability, and developer productivity. However, it also comes with challenges that need to be addressed. By understanding these trade-offs, you can make an informed decision about whether serverless is the right choice for your application.</p>
    `,
    featured: false,
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
