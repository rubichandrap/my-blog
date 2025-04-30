'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { env } from '@/configs/env';
import { useToast } from '@/hooks/use-toast';
import { send } from '@emailjs/browser';
import {
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const { emailjs } = env;

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await send(
        emailjs.serviceId,
        emailjs.templateId,
        {
          ...formData,
        },
        emailjs.publicKey
      );

      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'Failed to send message',
        description:
          'There was a problem sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            Contact Me
          </h1>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Send a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    className="min-h-[150px]"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="h-4 w-4" />
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
              <CardDescription>
                Here are the ways you can reach me directly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">rubichandrap@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Social Media</h3>
                <div className="flex gap-4 mt-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://github.com/rubichandrap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href="https://www.linkedin.com/in/rubi-chandraputra-9aba65213/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-1">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to messages within 24-48 hours during
                  weekdays.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
