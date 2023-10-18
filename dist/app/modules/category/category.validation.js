"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = require("zod");
const addCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(3).max(255),
        key: zod_1.z.string().min(3).max(255),
    }),
});
const updateCategoryZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(3).max(255).optional(),
        key: zod_1.z.string().min(3).max(255).optional(),
    }),
});
exports.CategoryValidation = {
    addCategoryZodSchema,
    updateCategoryZodSchema,
};
