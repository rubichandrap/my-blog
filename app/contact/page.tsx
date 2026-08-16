'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { env } from '@/configs/env';
import { useToast } from '@/hooks/use-toast';
import { send } from '@emailjs/browser';
import Link from 'next/link';
import { useState } from 'react';

const { emailjs } = env;

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/rubichandrap', external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rubi-chandraputra-9aba65213/',
    external: true,
  },
  { label: 'Email', href: 'mailto:rubichandrap@gmail.com' },
];

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
        description: 'Thank you for your message.',
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
    <div className="container mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" className="text-sm">
            Back to Home
          </Link>
          <h1>Contact</h1>
          <p className="mb-0 text-muted-foreground">
            Have a question or want to work together? Send a message or reach
            me directly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
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
              className="min-h-[150px]"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>

        <section>
          <h2 className="border-t border-border pt-6">Elsewhere</h2>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
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
        </section>
      </div>
    </div>
  );
}
