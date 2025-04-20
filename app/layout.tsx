import '@/app/globals.css';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import type React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Rubi Chandraputra - Software Engineer',
    template: '%s | Rubi Chandraputra',
  },
  description: 'My Personal Blog',
  keywords: [
    'software engineer',
    'web development',
    'full-stack',
    'blog',
    'Rubi Chandraputra',
  ],
  authors: [
    {
      name: 'Rubi Chandraputra',
    },
  ],
  creator: 'Rubi Chandraputra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
