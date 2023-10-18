"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqValidation = void 0;
const zod_1 = require("zod");
const addFaqZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string().nonempty(),
        answer: zod_1.z.string().nonempty(),
    }),
});
const updateFaqZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        question: zod_1.z.string().optional(),
        answer: zod_1.z.string().optional(),
    }),
});
exports.FaqValidation = {
    addFaqZodSchema,
    updateFaqZodSchema,
};
