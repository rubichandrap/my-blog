import BlogList from '@/components/blog-list';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Rubi Chandraputra',
  description:
    'Thoughts and insights on software engineering by Rubi Chandraputra',
};

export default function BlogPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" passHref>
            <Button variant="ghost" className="w-fit gap-1 p-0 h-auto">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Blog
          </h1>
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
