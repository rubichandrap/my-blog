import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import me from '@/assets/images/me.png';

export const metadata = {
  title: 'About Me | Rubi Chandraputra',
  description:
    'Learn more about Rubi Chandraputra, a software engineer with 5+ years of experience',
};

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" passHref>
            <Button variant="ghost" className="w-fit gap-1 p-0 h-auto">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            About Me
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Image
              src={me}
              alt="Rubi Chandraputra"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://github.com/rubichandrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/rubi-chandraputra-9aba65213/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:rubichandrap@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Hi, I'm Rubi Chandraputra
              </h2>
              <p className="text-muted-foreground">
                I'm Rubi Chandraputra, a Software Engineer. My primary language
                is TypeScript, and I have deep expertise in modern web
                technologies including React, Next.js, Express, and NestJS. I’m
                also proficient in working with Go and Python, which supports my
                versatility across different tech stacks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                Professional Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Senior Software Engineer</h4>
                  <p className="text-sm text-muted-foreground">
                    Rakhasa Artha Wisesa • 2021 - Present
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Defined architecture for connecting multiple services into
                    modular microservices. Managed project timelines and
                    coordination across teams. Handled the gRPC Gateway to allow
                    HTTP communication between clients and services. Introduced
                    a custom service bindings mechanism using code generation to
                    automatically bind services to the gateway. RumahBerkat
                    Migration Project: Led the transition of a legacy monolithic
                    system into a microservice-based architecture. Facilitated
                    planning, module separation, and team coordination
                    throughout the migration process.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Full-Stack Developer</h4>
                  <p className="text-sm text-muted-foreground">
                    HAI-O • 2018 - 2019
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Created compelling promotional content and marketing assets
                    using Adobe Photoshop and Adobe Illustrator. Designed online
                    posters, banners, and social media visuals that aligned with
                    branding strategies and campaign goals. Collaborated with
                    marketing teams to deliver creative assets on schedule and
                    tailored to audience engagement.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>JavaScript</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Vue.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express</Badge>
                <Badge>NestJS</Badge>
                <Badge>MongoDB</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Docker</Badge>
                <Badge>Git</Badge>
                <Badge>RESTful APIs</Badge>
                <Badge>GraphQL</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <div>
                <h4 className="font-medium">Bachelor of System Information</h4>
                <p className="text-sm text-muted-foreground">
                  Universitas Saintek Muhammadiyah • 2016 - 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
