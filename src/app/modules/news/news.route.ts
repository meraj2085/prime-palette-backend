import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { NewsController } from './news.controller';
import validateRequest from '../../middlewares/validateRequest';
import { NewsValidation } from './news.validation';
const router = express.Router();

// Routes
router.get('/', NewsController.getAllNews);
router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(NewsValidation.addNewsZodSchema),
  NewsController.addNews
);

export const NewsRoutes = router;
