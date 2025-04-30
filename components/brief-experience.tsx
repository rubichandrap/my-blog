import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function BriefExperience() {
  const experiences = [
    {
      company: 'Rakhasa Artha Wisesa',
      role: 'Multiple Roles',
      period: 'Jan 2021 - May 2025',
      description:
        'Progressed from Frontend Developer to Backend Developer to Project Manager, delivering scalable web applications and leading microservice architecture projects.',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'NestJS',
        'gRPC',
        'Docker',
        'PostgreSQL',
      ],
    },
    {
      company: 'Hai-O Enterprise Bhd',
      role: 'Graphic Designer',
      period: 'Jan 2018 - Jan 2019',
      description:
        'Created digital marketing materials and promotional content for online platforms using Adobe Creative Suite.',
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Online Graphics', 'UX'],
    },
  ];

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl !mb-2">
            Work Experience
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            A brief overview of my professional journey and key skills
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-md"
            >
              <CardHeader className="pb-2 border-b">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{experience.role}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {experience.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/about" passHref>
            <Button variant="outline" className="gap-1">
              View Full Experience
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
