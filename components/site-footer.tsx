import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Rubi Chandraputra. All rights
            reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/rubichandrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/rubi-chandraputra-9aba65213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:rubichandrap@gmail.com">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
