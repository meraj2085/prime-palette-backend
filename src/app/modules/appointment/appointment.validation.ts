import { z } from 'zod';

const updateAppointmentZodSchema = z.object({
  body: z.object({
    userId: z.string().optional(),
    serviceId: z.string().optional(),
    fullName: z.string().optional(),
    mobileNumber: z.string().optional(),
    address: z.string().optional(),
    appointment_date: z.string().optional(),
    appointment_status: z.string().optional(),
  }),
});

const addAppointmentZodSchema = z.object({
  body: z.object({
    userId: z.string().nonempty(),
    serviceId: z.string().nonempty(),
    fullName: z.string().nonempty(),
    mobileNumber: z.string().nonempty(),
    address: z.string().nonempty(),
    appointment_date: z.string().nonempty(),
    appointment_status: z.string().optional(),
  }),
});

export const AppointmentValidation = {
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
