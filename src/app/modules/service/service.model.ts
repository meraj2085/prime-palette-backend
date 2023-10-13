import { Schema, model } from 'mongoose';
import { IService, ServiceModel } from './service.interface';

const serviceSchema = new Schema<IService>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    availability: { type: Boolean, default: true },
    image_url: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comments: { type: [String], default: [] },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Service = model<IService, ServiceModel>('Service', serviceSchema);
