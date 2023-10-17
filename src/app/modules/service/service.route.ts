import express from 'express';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './service.validation';
const router = express.Router();

// Routes

router.get(
  '/getAllUpcomingServices',
  ServiceController.getAllUpcomingServices
);

router.get(
  '/:id',
  ServiceController.getSingleService
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  ServiceController.deleteService
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(ServiceValidation.updateServiceZodSchema),
  ServiceController.updateService
);

router.get(
  '/',
  ServiceController.getAllServices
);

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(ServiceValidation.addServiceZodSchema),
  ServiceController.createService
);

export const ServiceRoutes = router;
