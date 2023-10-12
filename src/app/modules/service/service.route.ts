import express from 'express';
import { ServiceController } from './service.controller';
// import auth from '../../middlewares/auth';
// import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

// Routes
router.get(
  '/',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  ServiceController.getAllServices
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  ServiceController.createService
);

export const ServiceRoutes = router;
