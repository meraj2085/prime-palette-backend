"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const mongoose_1 = require("mongoose");
const newsSchema = new mongoose_1.Schema({
    image_url: { type: String, default: '' },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    views: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.News = (0, mongoose_1.model)('News', newsSchema);
