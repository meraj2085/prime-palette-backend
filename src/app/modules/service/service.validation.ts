import { z } from 'zod';

const addServiceZodSchema = z.object({
  body: z.object({
    name: z.string().nonempty(),
    price: z.number(),
    description: z.string().nonempty(),
    availability: z.boolean().optional(),
    image_url: z.string().nonempty(),
    rating: z.number().optional(),
    is_upcoming: z.boolean().optional(),
  }),
});

const updateServiceZodSchema = z.object({
  body: z.object({
    name: z.string().nonempty().optional(),
    price: z.number().optional(),
    description: z.string().nonempty().optional(),
    availability: z.boolean().optional(),
    image_url: z.string().nonempty().optional(),
    rating: z.number().optional(),
    is_upcoming: z.boolean().optional(),
  }),
});

export const ServiceValidation = {
  addServiceZodSchema,
  updateServiceZodSchema,
};
