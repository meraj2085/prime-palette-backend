import express from 'express';
import { FeedbackController } from './feedback.controller';
// import auth from '../../middlewares/auth';
// import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

// Routes
router.get(
  '/',
  // auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  FeedbackController.getAllFeedback
);
router.post(
  '/',
  // auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER),
  FeedbackController.addFeedback
);

export const FeedbackRoutes = router;
