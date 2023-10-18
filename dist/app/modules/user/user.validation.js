"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .object({
            firstName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
        })
            .optional(),
        email: zod_1.z.string().email().optional(),
        mobileNumber: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        role: zod_1.z.string().optional(),
    }),
});
exports.UserValidation = {
    updateUserZodSchema,
};
