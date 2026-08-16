import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogList() {
  const posts = getAllBlogPosts();

  return (
    <div className="border-b border-border">
      {posts.map(post => (
        <div key={post.slug} className="border-t border-border py-4">
          <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
            <Link href={`/blog/${post.slug}`} className="text-lg font-medium">
              {post.title}
            </Link>
            <span className="text-sm text-muted-foreground">
              {post.date}
            </span>
          </div>
          <p className="mb-0 mt-1 text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      ))}
    </div>
  );
}
