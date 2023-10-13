import { Schema, model } from 'mongoose';
import {
  AppointmentModel,
  AppointmentStatus,
  IAppointment,
} from './appointment.interface';

const appointmentSchema = new Schema<IAppointment>(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Appointment = model<IAppointment, AppointmentModel>(
  'Appointment',
  appointmentSchema
);
