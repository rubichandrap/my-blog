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
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">RC</span>
          </Link>
          <nav className="hidden md:flex gap-6">
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
            <SheetContent title="Navigation Menu" side="right" className="pr-0">
              <div className="flex flex-col gap-4 px-4">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-bold text-xl">RC</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {routes.map(route => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-sm font-medium transition-colors hover:text-foreground/80 ${
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
