"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    availability: { type: Boolean, default: true },
    image_url: { type: String, required: true },
    rating: { type: Number, default: 0 },
    is_upcoming: { type: Boolean, default: false },
    category_id: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Service = (0, mongoose_1.model)('Service', serviceSchema);
