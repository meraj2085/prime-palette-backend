import { z } from 'zod';

const loginZodSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
  }),
});

const signUpZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string().min(2).max(100),
      lastName: z.string().min(2).max(100),
    }),
    email: z.string().email(),
    mobileNumber: z.string().min(10),
    password: z.string().min(6).max(100),
    role: z.enum(['user', 'admin']).optional(),
  }),
});

export const AuthValidation = {
  loginZodSchema,
  signUpZodSchema,
};
