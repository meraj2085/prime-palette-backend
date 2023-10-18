"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const news_controller_1 = require("./news.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const news_validation_1 = require("./news.validation");
const router = express_1.default.Router();
// Routes
router.get('/', news_controller_1.NewsController.getAllNews);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), (0, validateRequest_1.default)(news_validation_1.NewsValidation.addNewsZodSchema), news_controller_1.NewsController.addNews);
exports.NewsRoutes = router;
