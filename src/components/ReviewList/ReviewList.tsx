import { Review } from '../../types/review';
import { ReviewItem } from '../ReviewItem/ReviewItem';

type ReviewListProps = {
  reviewsList: Review[];
}

const ReviewList = ({reviewsList}: ReviewListProps) => (
  <ul className="reviews__list">
    {reviewsList.map((review) => <ReviewItem review={review} key={review.id}/>)}
  </ul>);

export {ReviewList};
