import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    area: z.string(),
    headline: z.string().optional(),
    hero_image: z.string().optional(),
    hero_alt: z.string().optional(),
    faqs: z.array(faqItem).optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    service: z.string(),
    headline: z.string().optional(),
    hero_image: z.string().optional(),
    hero_alt: z.string().optional(),
    faqs: z.array(faqItem).optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pub_date: z.coerce.date(),
    hero_image: z.string().optional(),
    hero_alt: z.string().optional(),
  }),
});

export const collections = { locations, services, articles };
