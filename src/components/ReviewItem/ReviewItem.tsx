import { Review } from '../../types/review';
import { Rating } from '../Rating/Rating';
import { ReviewTime } from './components/ReviewTime/ReviewTime';

type Props = {
  review: Review;
}

const ReviewItem = ({review}: Props) => {
  const {user, comment, rating, date} = review;
  const {name, avatarUrl} = user;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating pageBlock='reviews' rating={rating}/>
        <p className="reviews__text">
          {comment}
        </p>
        <ReviewTime date={date}/>
      </div>
    </li>
  );
};

export {ReviewItem};
