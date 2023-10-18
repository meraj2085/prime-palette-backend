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
exports.CategoryService = void 0;
const category_model_1 = require("./category.model");
const addCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_model_1.Category.create(data);
    return category;
});
const getAllCategory = () => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield category_model_1.Category.find();
    return category;
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCategory = yield category_model_1.Category.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return updatedCategory;
});
exports.CategoryService = {
    addCategory,
    getAllCategory,
    updateCategory,
};
