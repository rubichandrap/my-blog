'use client';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const routes = [
    {
      href: '/blog',
      label: 'Blog',
      active: pathname === '/blog' || pathname.startsWith('/blog/'),
    },
    {
      href: '/about',
      label: 'About',
      active: pathname === '/about',
    },
    {
      href: '/contact',
      label: 'Contact',
      active: pathname === '/contact',
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link
            href="/"
            className="font-serif text-lg font-bold tracking-tight md:text-xl"
          >
            Rubi Chandraputra
          </Link>
          <nav className="hidden gap-6 md:flex">
            {routes.map(route => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
                  route.active ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              title="Navigation Menu"
              side="right"
              className="!inset-0 !h-[100dvh] !w-[100dvw] !max-w-none"
            >
              <div className="flex h-full flex-col items-center justify-center gap-10 px-6 text-center">
                <Link
                  href="/"
                  className="font-serif text-2xl font-bold tracking-tight"
                  onClick={() => setOpen(false)}
                >
                  Rubi Chandraputra
                </Link>
                <nav className="flex flex-col items-center gap-6">
                  {routes.map(route => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-xl font-medium transition-colors hover:text-foreground/80 ${
                        route.active ? 'text-foreground' : 'text-foreground/60'
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
