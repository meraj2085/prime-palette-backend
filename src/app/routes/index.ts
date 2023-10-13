import express from 'express';
const router = express.Router();
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ServiceRoutes } from '../modules/service/service.route';
import { FeedbackRoutes } from '../modules/feedback/feedback.route';
import { AppointmentRoutes } from '../modules/appointment/appointment.route';

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
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
