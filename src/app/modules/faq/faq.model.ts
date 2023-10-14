import { Schema, model } from 'mongoose';
import { FaqModel, IFaq } from './faq.interface';

const faqSchema = new Schema<IFaq>(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Faq = model<IFaq, FaqModel>('Faq', faqSchema);
