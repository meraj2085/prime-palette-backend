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

const updateSingleAppointment = async (
  data: any
): Promise<IAppointment | null> => {
  const { id, status } = data;
  const appointment = await Appointment.findByIdAndUpdate(
    id,
    {
      appointment_status: status,
    },
    {
      new: true,
    }
  );
  return appointment;
};

const getAllUserAppointment = async (
  id: string
): Promise<IAppointment[] | null> => {
  const appointments = await Appointment.find({ userId: id })
    .populate({
      path: 'serviceId',
      model: 'Service',
      select: 'name image_url price',
    })
    .sort({ createdAt: 'desc' })
    .exec();
  return appointments;
};

export const AppointmentService = {
  addAppointment,
  getSingleAppointment,
  updateSingleAppointment,
  getAllUserAppointment,
};
