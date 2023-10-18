import { z } from 'zod';

const addCategoryZodSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(255),
    key: z.string().min(3).max(255),
  }),
});

const updateCategoryZodSchema = z.object({
  body: z.object({
    name: z.string().min(3).max(255).optional(),
    key: z.string().min(3).max(255).optional(),
  }),
});

export const CategoryValidation = {
  addCategoryZodSchema,
  updateCategoryZodSchema,
};
