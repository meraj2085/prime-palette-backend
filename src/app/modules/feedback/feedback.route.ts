import express from 'express';
import { FeedbackController } from './feedback.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
// import validateRequest from '../../middlewares/validateRequest';
// import { FeedbackValidation } from './feedback.validation';
const router = express.Router();

// Routes
router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FeedbackController.getAllFeedback
);

router.post(
  '/',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  // validateRequest(FeedbackValidation.addFeedbackZodSchema),
  FeedbackController.addFeedback
);

export const FeedbackRoutes = router;
