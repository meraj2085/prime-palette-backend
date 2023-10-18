"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
// Routes
router.get('/getAllUpcomingServices', service_controller_1.ServiceController.getAllUpcomingServices);
router.get('/getServicesByCategory/:id', service_controller_1.ServiceController.getServicesByCategory);
router.get('/:id', service_controller_1.ServiceController.getSingleService);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), service_controller_1.ServiceController.deleteService);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), (0, validateRequest_1.default)(service_validation_1.ServiceValidation.updateServiceZodSchema), service_controller_1.ServiceController.updateService);
router.get('/', service_controller_1.ServiceController.getAllServices);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), (0, validateRequest_1.default)(service_validation_1.ServiceValidation.addServiceZodSchema), service_controller_1.ServiceController.createService);
exports.ServiceRoutes = router;
