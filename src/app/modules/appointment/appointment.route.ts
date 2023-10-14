import express from 'express';
import { AppointmentController } from './appointment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

// Routes
router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  AppointmentController.getSingleAppointment
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  AppointmentController.getAllUserAppointment
);

router.post(
  '/',
  // auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  AppointmentController.addAppointment
);

router.patch(
  '/update-status',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  AppointmentController.updateSingleAppointment
);

export const AppointmentRoutes = router;
