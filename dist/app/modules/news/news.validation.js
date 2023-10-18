"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsValidation = void 0;
const zod_1 = require("zod");
const addNewsZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        image_url: zod_1.z.string().optional(),
        title: zod_1.z.string().nonempty(),
        description: zod_1.z.string().nonempty(),
        views: zod_1.z.string().nonempty(),
    }),
});
exports.NewsValidation = {
    addNewsZodSchema,
};
