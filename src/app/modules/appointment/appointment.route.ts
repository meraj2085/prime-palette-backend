import express from 'express';
import { AppointmentController } from './appointment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { AppointmentValidation } from './appointment.validation';
const router = express.Router();

// Routes

router.get(
  '/getAllAppointment',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AppointmentController.getAllAppointment
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AppointmentController.getSingleAppointment
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AppointmentController.getAllUserAppointment
);

router.post(
  '/',
  auth(ENUM_USER_ROLE.USER,ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AppointmentValidation.addAppointmentZodSchema),
  AppointmentController.addAppointment
);

router.patch(
  '/update-status',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AppointmentValidation.updateAppointmentZodSchema),
  AppointmentController.updateSingleAppointment
);

router.patch(
  '/updateScheduleAndStatus',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AppointmentValidation.updateAppointmentZodSchema),
  AppointmentController.updateScheduleAndStatus
);

export const AppointmentRoutes = router;
