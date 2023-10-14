import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FaqController } from './faq.controller';
const router = express.Router();

// Routes
router.get(
  '/',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  FaqController.getAllFaq
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  FaqController.getSingleFaq
);
router.post('/', auth(ENUM_USER_ROLE.ADMIN), FaqController.addFaq);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.updateFaq);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.deleteFaq);

export const FaqRoutes = router;
