import express from 'express';
const router = express.Router();
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ServiceRoutes } from '../modules/service/service.route';
import { FeedbackRoutes } from '../modules/feedback/feedback.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { FaqRoutes } from '../modules/faq/faq.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { NewsRoutes } from '../modules/news/news.route';
import { CategoryRoutes } from '../modules/category/category.route';

// Routes
const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/service',
    route: ServiceRoutes,
  },
  {
    path: '/feedback',
    route: FeedbackRoutes,
  },
  {
    path: '/appointment',
    route: AppointmentRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/faq',
    route: FaqRoutes,
  },
  {
    path: '/review',
    route: ReviewRoutes,
  },
  {
    path: '/news',
    route: NewsRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
