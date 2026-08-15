import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-6 text-sm">
        <span>&copy; {new Date().getFullYear()} Rubi Chandraputra</span>
        <span aria-hidden="true">&middot;</span>
        <Link
          href="https://github.com/rubichandrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <span aria-hidden="true">&middot;</span>
        <Link
          href="https://www.linkedin.com/in/rubi-chandraputra-9aba65213/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <span aria-hidden="true">&middot;</span>
        <Link href="mailto:rubichandrap@gmail.com">Email</Link>
      </div>
    </footer>
  );
}
