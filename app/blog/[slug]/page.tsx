import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    <div className="container px-4 md:px-6 py-12 max-w-4xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/blog" passHref>
            <Button variant="ghost" className="w-fit gap-1 p-0 h-auto">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <article className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-3 items-center text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {post.coverImage && (
            <div className="mb-8">
              <Image
                src="https://picsum.photos/1200/630"
                alt={post.title}
                width={1200}
                height={630}
                className="rounded-lg object-cover w-full"
              />
            </div>
          )}

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
}
