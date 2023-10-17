import { z } from 'zod';

const addNewsZodSchema = z.object({
  body: z.object({
    image_url: z.string().optional(),
    title: z.string().nonempty(),
    description: z.string().nonempty(),
    views: z.string().nonempty(),
  }),
});

export const NewsValidation = {
  addNewsZodSchema,
};
