"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackValidation = void 0;
const zod_1 = require("zod");
const addFeedbackZodSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: 'Name is required' }),
    email: zod_1.z.string().email({ message: 'Invalid email' }),
    feedback: zod_1.z.string().nonempty({ message: 'Feedback is required' }),
    rating: zod_1.z
        .number()
        .int()
        .min(1)
        .max(5, { message: 'Rating must be between 1 and 5' }),
});
exports.FeedbackValidation = {
    addFeedbackZodSchema,
};
