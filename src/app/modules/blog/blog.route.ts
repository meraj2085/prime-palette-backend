import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { BlogController } from './blog.controller';
const router = express.Router();

// Routes
router.get(
  '/',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  BlogController.getAllBlogs
);
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.USER, ENUM_USER_ROLE.ADMIN),
  BlogController.getSingleBlog
);
router.post('/', auth(ENUM_USER_ROLE.ADMIN), BlogController.addBlog);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BlogController.updateBlog);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BlogController.deleteBlog);

export const BlogRoutes = router;
