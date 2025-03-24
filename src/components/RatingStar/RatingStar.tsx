import { RatingValue } from '../../types/rating';

type RatingStarProps = {
  score: RatingValue;
  rating: RatingValue;
  title: string;
  handleRatingChange: (value: RatingValue)=> void;
}

const RatingStar = ({score, rating, title, handleRatingChange}: RatingStarProps) => (
  <>
    <input className="form__rating-input visually-hidden" name="rating"
      value={score} id={`${score}-stars`}
      type="radio"
      checked={rating === score}
      onChange={()=>handleRatingChange(score)}
    />
    <label htmlFor={`${score}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

export {RatingStar};
