import { z } from 'zod';

const addFaqZodSchema = z.object({
  body: z.object({
    question: z.string().nonempty(),
    answer: z.string().nonempty(),
  }),
});

const updateFaqZodSchema = z.object({
  body: z.object({
    question: z.string().optional(),
    answer: z.string().optional(),
  }),
});

export const FaqValidation = {
  addFaqZodSchema,
  updateFaqZodSchema,
};
