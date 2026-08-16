import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Rubi Chandraputra',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Rubi Chandraputra`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 md:px-6 py-12">
      <Link href="/blog" className="text-sm">
        Back to Blog
      </Link>
      <article className="prose prose-gray dark:prose-invert max-w-none mt-6">
        <h1>{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">
          {post.date} · {post.readingTime} min read · {post.tags.join(' · ')}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}
