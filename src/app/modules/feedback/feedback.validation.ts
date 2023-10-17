import { z } from 'zod';

const addFeedbackZodSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email' }),
  feedback: z.string().nonempty({ message: 'Feedback is required' }),
  rating: z
    .number()
    .int()
    .min(1)
    .max(5, { message: 'Rating must be between 1 and 5' }),
});

export const FeedbackValidation = {
  addFeedbackZodSchema,
};
