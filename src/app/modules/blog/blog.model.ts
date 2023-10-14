import { Schema, model } from 'mongoose';
import { BlogModel, IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    image_url: { type: String, default: '' },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    views: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Blog = model<IBlog, BlogModel>('Blog', blogSchema);
