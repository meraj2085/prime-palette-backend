"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(6).max(100),
    }),
});
const signUpZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string().min(2).max(100),
            lastName: zod_1.z.string().min(2).max(100),
        }),
        email: zod_1.z.string().email(),
        mobileNumber: zod_1.z.string().min(10),
        password: zod_1.z.string().min(6).max(100),
        role: zod_1.z.enum(['user', 'admin']).optional(),
    }),
});
exports.AuthValidation = {
    loginZodSchema,
    signUpZodSchema,
};
