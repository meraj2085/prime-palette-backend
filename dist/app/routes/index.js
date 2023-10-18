"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const service_route_1 = require("../modules/service/service.route");
const feedback_route_1 = require("../modules/feedback/feedback.route");
const appointment_route_1 = require("../modules/appointment/appointment.route");
const blog_route_1 = require("../modules/blog/blog.route");
const faq_route_1 = require("../modules/faq/faq.route");
const review_route_1 = require("../modules/review/review.route");
const news_route_1 = require("../modules/news/news.route");
const category_route_1 = require("../modules/category/category.route");
// Routes
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/service',
        route: service_route_1.ServiceRoutes,
    },
    {
        path: '/feedback',
        route: feedback_route_1.FeedbackRoutes,
    },
    {
        path: '/appointment',
        route: appointment_route_1.AppointmentRoutes,
    },
    {
        path: '/blog',
        route: blog_route_1.BlogRoutes,
    },
    {
        path: '/faq',
        route: faq_route_1.FaqRoutes,
    },
    {
        path: '/review',
        route: review_route_1.ReviewRoutes,
    },
    {
        path: '/news',
        route: news_route_1.NewsRoutes,
    },
    {
        path: '/category',
        route: category_route_1.CategoryRoutes,
    },
];
moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
});
exports.default = router;
