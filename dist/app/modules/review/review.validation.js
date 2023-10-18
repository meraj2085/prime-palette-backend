"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const addReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        user_id: zod_1.z.string().nonempty({ message: 'User ID is required' }),
        service_id: zod_1.z.string().nonempty({ message: 'Service ID is required' }),
        comment: zod_1.z.string().nonempty({ message: 'Comment is required' }),
        rating: zod_1.z.number().int().min(1).max(5),
    }),
});
exports.ReviewValidation = {
    addReviewZodSchema,
};
