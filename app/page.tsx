import me from '@/assets/images/me.png';
import { BriefExperience } from '@/components/brief-experience';
import FeaturedPosts from '@/components/featured-posts';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Code,
  Cpu,
  Database,
  ExternalLink,
  Globe,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Rubi Chandraputra
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    I&apos;m Rubi Chandraputra, a Software Engineer. My primary
                    language is TypeScript, and I have deep expertise in modern
                    web technologies including React, Next.js, Express, and
                    NestJS. I&apos;m also proficient in working with Go and
                    Python, which supports my versatility across different tech
                    stacks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/blog" passHref>
                    <Button className="gap-1 text-white">
                      Read My Blog
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about" passHref>
                    <Button variant="outline">About Me</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={me}
                  alt="Rubi Chandraputra"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2 max-w-3xl">
                <h2 className="!mb-2">My Expertise</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  With over 5 years of experience, I&apos;ve developed a diverse
                  skill set across the full development stack. Here are the key
                  areas where I can help bring your projects to life.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Frontend Card */}
              <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute top-0 right-0 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold">Frontend</h3>
                  <p className="mt-2 text-muted-foreground">
                    Creating responsive, intuitive user interfaces with modern
                    frameworks and tools.
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[95%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">
                        React & Next.js
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[90%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">TypeScript</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[85%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">Tailwind CSS</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">Redux</Badge>
                    <Badge variant="secondary">Framer Motion</Badge>
                  </div>
                </div>
              </div>

              {/* Backend Card */}
              <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute top-0 right-0 p-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold">Backend</h3>
                  <p className="mt-2 text-muted-foreground">
                    Building robust, scalable server-side applications and APIs.
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[90%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">Node.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[85%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">Express</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[80%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">MongoDB</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">NestJS</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                  </div>
                </div>
              </div>

              {/* DevOps Card */}
              <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute top-0 right-0 p-3">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold">DevOps</h3>
                  <p className="mt-2 text-muted-foreground">
                    Streamlining development workflows and deployment processes.
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[85%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">Docker</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[70%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">Git</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[40%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">AWS</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="secondary">Vercel</Badge>
                  </div>
                </div>
              </div>

              {/* Web Services Card */}
              <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute top-0 right-0 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold">Web Services</h3>
                  <p className="mt-2 text-muted-foreground">
                    Designing and implementing efficient, secure web services
                    and APIs.
                  </p>

                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[90%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">RESTful APIs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[80%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">GraphQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[75%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm font-medium">Microservices</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="secondary">OAuth</Badge>
                    <Badge variant="secondary">JWT</Badge>
                    <Badge variant="secondary">WebSockets</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/about" passHref>
                <Button variant="outline" className="gap-2">
                  View My Full Skill Set
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <BriefExperience />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Featured Posts
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Check out some of my latest thoughts on software engineering.
                </p>
              </div>
            </div>
            <FeaturedPosts />
            <div className="flex justify-center mt-8">
              <Link href="/blog" passHref>
                <Button variant="outline" className="gap-1">
                  View All Posts
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
