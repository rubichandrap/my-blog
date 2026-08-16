import Link from 'next/link';

export const metadata = {
  title: 'About | Rubi Chandraputra',
  description:
    'Bio, experience, and skills of Rubi Chandraputra, software engineer in TypeScript, NestJS, and Go.',
};

const CONTACT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/rubichandrap', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rubi-chandraputra-9aba65213/',
    external: true,
  },
  { label: 'Email', href: 'mailto:rubichandrap@gmail.com' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-sm">
            Back to Home
          </Link>
          <h1>About</h1>
        </div>

        <div className="space-y-4">
          <p className="mb-0">
              I&apos;m a software engineer who started as a graphic designer.
              For four and a half years at Rakhasa Artha Wisesa (Jan 2021 –
              May 2025) I moved from frontend development into backend work
              and project management. I led the architecture of WCore, a
              microservice platform whose services communicate through a gRPC
              gateway, and introduced a code-generation mechanism that binds
              services to the gateway automatically. I also led the
              RumahBerkat migration, breaking a legacy monolith into
              microservices.
            </p>
            <p className="mb-0">
              Before software I was a graphic designer at Hai-O Enterprise
              Bhd, producing promotional content and marketing assets in
              Adobe Photoshop and Illustrator. I studied system information
              at Universitas Saintek Muhammadiyah and graduated in 2023.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2">
              {CONTACT_LINKS.map((link, index) => (
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

        <section>
          <h2 className="border-t border-border pt-6">Professional Experience</h2>

          <div className="border-b border-border">
            <div className="border-t border-border py-6">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="mb-0 text-lg font-semibold">PT Artha Infotama</h3>
                <p className="mb-0 text-sm text-muted-foreground">
                  Jun 2025 - Present
                </p>
              </div>
              <p className="mb-0 mt-1">Technical Consultant</p>
              <p className="mb-0 mt-1 text-muted-foreground">
                Design and build internal development frameworks — a project
                scaffolder, CLI, and shared runtime libraries — that
                standardize how new applications are created and run. Publish
                internal packages to a private Azure Artifacts feed with
                versioned releases. Build an MCP server that gives AI coding
                agents structured access to internal tooling and project
                context. Turn business consultant requirements into technical
                deliverables: scoping, architecture, and implementation of
                internal systems.
              </p>
            </div>

            <div className="border-t border-border py-6">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="mb-0 text-lg font-semibold">
                  Rakhasa Artha Wisesa
                </h3>
                <p className="mb-0 text-sm text-muted-foreground">
                  Jan 2021 – May 2025
                </p>
              </div>
              <p className="mb-0 mt-1">
                Software Engineer
                <span className="text-muted-foreground">
                  {' '}
                  — Frontend → Backend → Project Manager
                </span>
              </p>
              <ul className="mb-0 mt-2 space-y-1 text-muted-foreground">
                <li>
                  Defined architecture for connecting multiple services into
                  modular microservices (WCore).
                </li>
                <li>
                  Managed project timelines and coordination across teams.
                </li>
                <li>
                  Handled the gRPC Gateway to allow HTTP communication between
                  clients and services.
                </li>
                <li>
                  Introduced a custom service bindings mechanism using code
                  generation to automatically bind services to the gateway.
                </li>
                <li>
                  Led the transition of a legacy monolithic system into a
                  microservice-based architecture (RumahBerkat migration).
                </li>
                <li>
                  Facilitated planning, module separation, and team
                  coordination throughout the migration.
                </li>
              </ul>
            </div>

            <div className="border-t border-border py-6">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="mb-0 text-lg font-semibold">
                  Hai-O Enterprise Bhd
                </h3>
                <p className="mb-0 text-sm text-muted-foreground">
                  Jan 2018 – Jan 2019
                </p>
              </div>
              <p className="mb-0 mt-1">Graphic Designer</p>
              <p className="mb-0 mt-1 text-muted-foreground">
                Created compelling promotional content and marketing assets
                using Adobe Photoshop and Adobe Illustrator. Designed online
                posters, banners, and social media visuals that aligned with
                branding strategies and campaign goals. Collaborated with
                marketing teams to deliver creative assets on schedule and
                tailored to audience engagement.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="border-t border-border pt-6">Skills</h2>
          <p className="mb-0 text-muted-foreground">
            Languages: TypeScript, JavaScript, Go, Python. Frameworks and
            libraries: React, Next.js, Vue.js, Node.js, Express, NestJS,
            Turborepo. Data and infrastructure: PostgreSQL, MongoDB, Docker,
            Apache Kafka, gRPC, GraphQL, REST APIs, buf. Tools and design:
            Git, Adobe Photoshop, Adobe Illustrator.
          </p>
        </section>

        <section>
          <h2 className="border-t border-border pt-6">Education</h2>
          <div className="border-t border-border py-6">
            <h3 className="mb-0 text-lg font-semibold">
              Bachelor of System Information
            </h3>
            <p className="mb-0 mt-1 text-sm text-muted-foreground">
              Universitas Saintek Muhammadiyah • 2017 – 2023
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
