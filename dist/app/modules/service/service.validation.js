"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const addServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty(),
        price: zod_1.z.number(),
        description: zod_1.z.string().nonempty(),
        availability: zod_1.z.boolean().optional(),
        image_url: zod_1.z.string().nonempty(),
        rating: zod_1.z.number().optional(),
        is_upcoming: zod_1.z.boolean().optional(),
    }),
});
const updateServiceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty().optional(),
        price: zod_1.z.number().optional(),
        description: zod_1.z.string().nonempty().optional(),
        availability: zod_1.z.boolean().optional(),
        image_url: zod_1.z.string().nonempty().optional(),
        rating: zod_1.z.number().optional(),
        is_upcoming: zod_1.z.boolean().optional(),
    }),
});
exports.ServiceValidation = {
    addServiceZodSchema,
    updateServiceZodSchema,
};
