import express from 'express';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

// Routes
router.get(
  '/:id',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  ServiceController.getSingleService
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  ServiceController.deleteService
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  ServiceController.updateService
);

router.get(
  '/',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  ServiceController.getAllServices
);

router.patch(
  '/addComment',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  ServiceController.addComment
);

router.post(
  '/',
  // auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  ServiceController.createService
);

export const ServiceRoutes = router;
