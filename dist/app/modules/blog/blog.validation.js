"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidation = void 0;
const zod_1 = require("zod");
const updateBlogZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        image_url: zod_1.z.string().optional(),
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        views: zod_1.z.string().optional(),
    }),
});
const addBlogZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        image_url: zod_1.z.string().optional(),
        title: zod_1.z.string(),
        description: zod_1.z.string(),
        views: zod_1.z.string(),
    }),
});
exports.BlogValidation = {
    updateBlogZodSchema,
    addBlogZodSchema,
};
