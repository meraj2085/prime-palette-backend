import { z } from 'zod';

const updateUserZodSchema = z.object({
  body: z.object({
    name: z
      .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
      })
      .optional(),
    email: z.string().email().optional(),
    mobileNumber: z.string().optional(),
    password: z.string().optional(),
    role: z.string().optional(),
  }),
});

export const UserValidation = {
  updateUserZodSchema,
};
