/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export enum AppointmentStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
}

export type IAppointment = {
  userId: string;
  serviceId: string;
  fullName: string;
  mobileNumber: string;
  address: string;
  appointment_date: string;
  appointment_status: AppointmentStatus;
};

export type AppointmentModel = Model<IAppointment, Record<string, unknown>>;
