import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
  roles?: {
    title: string;
    period: string;
    responsibilities: string[];
  }[];
  projects?: {
    name: string;
    description: string[];
  }[];
  skills: string[];
}

export function ExperienceSection() {
  const experiences: ExperienceProps[] = [
    {
      title: 'Multiple Roles',
      company: 'Rakhasa Artha Wisesa',
      period: 'Jan 2021 - May 2025',
      description:
        "Over the past 4.5 years at Rakhasa Artha Wisesa, I've held multiple key roles—starting as a Frontend Developer, transitioning into Backend Development, and later stepping into a Project Manager role. This journey has given me a comprehensive understanding of both the technical and strategic aspects of software development.",
      roles: [
        {
          title: 'Frontend Developer',
          period: '2.5 years',
          responsibilities: [
            'Built and maintained responsive, scalable web applications using React, Next.js, React Hook Form, React Query, and Redux Toolkit.',
            'Implemented and optimized complex state management systems, including socket-based state handling for real-time notifications with role-based permission logic.',
            'Worked closely with UI/UX teams to ensure seamless user experiences and handled component library architecture for code reuse and consistency.',
          ],
        },
        {
          title: 'Backend Developer',
          period: '1.5 years',
          responsibilities: [
            'Developed RESTful and gRPC APIs using NestJS, Express, and TypeORM.',
            'Contributed to system architecture, database design, and implemented various backend modules for internal and external integrations.',
            'Focused on writing clean, maintainable code with a strong emphasis on scalability, testability, and performance.',
          ],
        },
        {
          title: 'Project Manager',
          period: '3 months',
          responsibilities: [],
        },
      ],
      projects: [
        {
          name: 'WCore (Microservice Platform)',
          description: [
            'Defined architecture for connecting multiple services into modular microservices.',
            'Managed project timelines and coordination across teams.',
            'Handled the gRPC Gateway to allow HTTP communication between clients and services.',
            'Introduced a custom service bindings mechanism using code generation to automatically bind services to the gateway.',
          ],
        },
        {
          name: 'RumahBerkat Migration Project',
          description: [
            'Led the transition of a legacy monolithic system into a microservice-based architecture.',
            'Facilitated planning, module separation, and team coordination throughout the migration process.',
          ],
        },
      ],
      skills: [
        'gRPC',
        'React.js',
        'Turborepo',
        'Next.js',
        'Go',
        'TypeScript',
        'Docker',
        'PostgreSQL',
        'MongoDB',
        'buf',
        'Apache Kafka',
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'Hai-O Enterprise Bhd',
      period: 'Jan 2018 - Jan 2019',
      description:
        'At HAI-O, I worked as a Graphic Designer focused on digital marketing materials for online platforms.',
      roles: [
        {
          title: 'Graphic Designer',
          period: '1 year',
          responsibilities: [
            'Created compelling promotional content and marketing assets using Adobe Photoshop and Adobe Illustrator.',
            'Designed online posters, banners, and social media visuals that aligned with branding strategies and campaign goals.',
            'Collaborated with marketing teams to deliver creative assets on schedule and tailored to audience engagement.',
          ],
        },
      ],
      skills: [
        'Online Graphics',
        'User Experience (UX)',
        'Adobe Photoshop',
        'Adobe Illustrator',
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md">
            <div className="absolute top-0 left-0 h-full w-1 bg-primary"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {experience.company}
                  </CardDescription>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  {experience.period}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{experience.description}</p>

              {experience.roles && experience.roles.length > 0 && (
                <div className="space-y-4">
                  {experience.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold">{role.title}</h4>
                        <span className="text-sm text-muted-foreground">
                          ({role.period})
                        </span>
                      </div>
                      {role.responsibilities.length > 0 && (
                        <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                          {role.responsibilities.map(
                            (responsibility, respIndex) => (
                              <li key={respIndex}>{responsibility}</li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {experience.projects && experience.projects.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Key Projects</h4>
                  {experience.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="space-y-2">
                      <h5 className="font-medium">{project.name}</h5>
                      <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                        {project.description.map((desc, descIndex) => (
                          <li key={descIndex}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <h4 className="mb-2 text-sm font-medium">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
