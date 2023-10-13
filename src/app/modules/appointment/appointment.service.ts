import { IAppointment } from './appointment.interface';
import { Appointment } from './appointment.model';

const addAppointment = async (
  data: IAppointment
): Promise<IAppointment | null> => {
  const service = await Appointment.create(data);
  return service;
};

const getSingleAppointment = async (
  id: string
): Promise<IAppointment | null> => {
  const appointment = await Appointment.findById(id);
  return appointment;
};

const getAllUserAppointment = async (
  id: string
): Promise<IAppointment[] | null> => {
  const appointments = await Appointment.find({ userId: id });
  return appointments;
};

export const AppointmentService = {
  addAppointment,
  getSingleAppointment,
  getAllUserAppointment,
};
