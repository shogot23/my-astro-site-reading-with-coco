import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    genre: z.string(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date(),
    coverImage: z.string(),
    infographics: z.array(z.string()),
    summary: z.string(),
    rating: z.number().min(0).max(5).optional(),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    genre: z.string(),
    bookSlug: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    notes: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    bookSlug: z.string(),
    date: z.coerce.date(),
    url: z.string().url(),
    platform: z.string(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = { books, photos, videos };
