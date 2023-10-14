import { Schema, model } from 'mongoose';
import { FeedbackModel, IFeedback } from './feedback.interface';

const feedbackSchema = new Schema<IFeedback>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    feedback: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Feedback = model<IFeedback, FeedbackModel>('Feedback', feedbackSchema);
