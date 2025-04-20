import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-6 py-12 text-center">
      <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
      <p className="mt-2 text-muted-foreground">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
