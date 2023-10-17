import { z } from 'zod';

const updateBlogZodSchema = z.object({
  body: z.object({
    image_url: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    views: z.string().optional(),
  }),
});

const addBlogZodSchema = z.object({
  body: z.object({
    image_url: z.string().optional(),
    title: z.string(),
    description: z.string(),
    views: z.string(),
  }),
});

export const BlogValidation = {
  updateBlogZodSchema,
  addBlogZodSchema,
};
