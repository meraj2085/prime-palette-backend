"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const appointment_model_1 = require("./appointment.model");
const addAppointment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield appointment_model_1.Appointment.create(data);
    return service;
});
const getSingleAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield appointment_model_1.Appointment.findById(id);
    return appointment;
});
const updateSingleAppointment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, status } = data;
    const appointment = yield appointment_model_1.Appointment.findByIdAndUpdate(id, {
        appointment_status: status,
    }, {
        new: true,
    });
    return appointment;
});
const updateScheduleAndStatus = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { id } = data;
    const appointment = yield appointment_model_1.Appointment.findByIdAndUpdate(id, {
        appointment_date: (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.appointment_date,
        appointment_status: (_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.appointment_status,
    }, {
        new: true,
    });
    return appointment;
});
const getAllUserAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointment_model_1.Appointment.find({ userId: id })
        .populate({
        path: 'serviceId',
        model: 'Service',
        select: 'name image_url price',
    })
        .sort({ createdAt: 'desc' })
        .exec();
    return appointments;
});
const getAllAppointment = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield appointment_model_1.Appointment.find()
        .populate({
        path: 'serviceId',
        model: 'Service',
        select: 'name image_url price',
    })
        .sort({ createdAt: 'desc' })
        .exec();
    return appointments;
});
exports.AppointmentService = {
    addAppointment,
    getSingleAppointment,
    updateSingleAppointment,
    getAllUserAppointment,
    getAllAppointment,
    updateScheduleAndStatus,
};
