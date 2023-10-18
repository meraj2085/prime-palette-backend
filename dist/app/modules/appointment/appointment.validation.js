"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentValidation = void 0;
const zod_1 = require("zod");
const updateAppointmentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().optional(),
        serviceId: zod_1.z.string().optional(),
        fullName: zod_1.z.string().optional(),
        mobileNumber: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        appointment_date: zod_1.z.string().optional(),
        appointment_status: zod_1.z.string().optional(),
    }),
});
const addAppointmentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().nonempty(),
        serviceId: zod_1.z.string().nonempty(),
        fullName: zod_1.z.string().nonempty(),
        mobileNumber: zod_1.z.string().nonempty(),
        address: zod_1.z.string().nonempty(),
        appointment_date: zod_1.z.string().nonempty(),
        appointment_status: zod_1.z.string().optional(),
    }),
});
exports.AppointmentValidation = {
    updateAppointmentZodSchema,
    addAppointmentZodSchema,
};
/* {
    userId: {type: String, required: true},
    serviceId: {type: String, required: true},
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    address: { type: String, required: true },
    appointment_date: { type: String, required: true },
    appointment_status: {
      type: String,
      enum: AppointmentStatus,
      default: AppointmentStatus.PENDING,
    },
  }, */
