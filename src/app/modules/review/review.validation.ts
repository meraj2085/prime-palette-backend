import { z } from 'zod';

const addReviewZodSchema = z.object({
  body: z.object({
    user_id: z.string().nonempty({ message: 'User ID is required' }),
    service_id: z.string().nonempty({ message: 'Service ID is required' }),
    comment: z.string().nonempty({ message: 'Comment is required' }),
    rating: z.number().int().min(1).max(5),
  }),
});

export const ReviewValidation = {
  addReviewZodSchema,
};
