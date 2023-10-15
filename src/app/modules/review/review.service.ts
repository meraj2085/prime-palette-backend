import { IReview } from './review.interface';
import { Review } from './review.model';

const addReview = async (data: IReview): Promise<IReview | null> => {
  const review = await Review.create(data);
  return review;
};

const getReview = async (id: string) => {
  const reviews = await Review.find({ service_id: id })
    .populate({
      path: 'user_id',
      model: 'User',
      select: 'name',
    })
    .sort({ createdAt: -1 })
    .exec();
  return reviews;
};

export const ReviewService = {
  addReview,
  getReview,
};
