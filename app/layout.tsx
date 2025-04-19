import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Rubi Chandraputra - Software Engineer",
    template: "%s | Rubi Chandraputra",
  },
  description:
    "Personal website and blog of Rubi Chandraputra, a software engineer with 5+ years of experience in full-stack development.",
  keywords: ["software engineer", "web development", "full-stack", "blog", "Rubi Chandraputra"],
  authors: [
    {
      name: "Rubi Chandraputra",
    },
  ],
  creator: "Rubi Chandraputra",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
