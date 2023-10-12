import express from 'express';
const router = express.Router();
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ServiceRoutes } from '../modules/service/service.route';

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
  }
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
