import BlogList from '@/components/blog-list';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Rubi Chandraputra',
  description:
    'Thoughts and insights on software engineering by Rubi Chandraputra',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-sm">
            Back to Home
          </Link>
          <h1>Blog</h1>
          <p className="text-muted-foreground text-lg">
            My thoughts and insights on software engineering, web development,
            and technology.
          </p>
        </div>
        <BlogList />
      </div>
    </div>
  );
}
