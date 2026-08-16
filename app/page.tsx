import { getAllBlogPosts } from '@/lib/blog';
import Link from 'next/link';

type HeroLink = {
  label: string;
  href: string;
  external?: boolean;
};

const HERO_LINKS: HeroLink[] = [
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  {
    label: 'GitHub',
    href: 'https://github.com/rubichandrap',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rubi-chandraputra-9aba65213/',
    external: true,
  },
  { label: 'Email', href: 'mailto:rubichandrap@gmail.com' },
];

const EXPERIENCES = [
  {
    company: 'PT Artha Infotama',
    role: 'Technical Consultant',
    period: 'Jun 2025 – Present',
    description:
      'Design and build internal development frameworks — a project scaffolder, CLI, and shared runtime libraries — that standardize how new applications are created and run. Publish internal packages to a private Azure Artifacts feed. Build an MCP server that gives AI coding agents structured access to internal tooling. Turn business consultant requirements into technical deliverables: scoping, architecture, and implementation of internal systems.',
  },
  {
    company: 'Rakhasa Artha Wisesa',
    role: 'Software Engineer',
    subline: 'Frontend → Backend → Project Manager',
    period: 'Jan 2021 – May 2025',
    description:
      'Delivered web applications and backend services, leading microservice architecture projects.',
  },
  {
    company: 'Hai-O Enterprise Bhd',
    role: 'Graphic Designer',
    period: 'Jan 2018 – Jan 2019',
    description:
      'Created digital marketing materials and promotional content for online platforms using Adobe Creative Suite.',
  },
];

export default function Home() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <main className="flex-1">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h1>Rubi Chandraputra</h1>
          <p className="mb-0 text-xl leading-8 text-muted-foreground">
            Software engineer. Five-plus years building web applications and
            backend services in TypeScript, NestJS, and Go.
          </p>
          <p className="mb-0 text-muted-foreground">
            TypeScript · React · Next.js · NestJS · Go · Python
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1">
            {HERO_LINKS.map((link, index) => (
              <span key={link.label} className="flex items-center gap-x-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-muted-foreground/50">
                    ·
                  </span>
                )}
                <Link
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="border-t border-border pt-6">Experience</h2>
          <div>
            {EXPERIENCES.map(experience => (
              <div
                key={experience.company}
                className="border-t border-border py-6"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="mb-0 text-lg font-semibold">
                    {experience.company}
                  </h3>
                  <p className="mb-0 text-sm text-muted-foreground">
                    {experience.period}
                  </p>
                </div>
                <p className="mb-0 mt-1">
                  {experience.role}
                  {experience.subline && (
                    <span className="text-muted-foreground">
                      {' '}
                      — {experience.subline}
                    </span>
                  )}
                </p>
                <p className="mb-0 mt-1 text-muted-foreground">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="border-t border-border pt-6">Writing</h2>
          <div className="border-b border-border">
            {posts.map(post => (
              <div key={post.slug} className="border-t border-border py-4">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <Link href={`/blog/${post.slug}`} className="text-lg font-medium">
                    {post.title}
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <p className="mb-0 mt-1 text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
