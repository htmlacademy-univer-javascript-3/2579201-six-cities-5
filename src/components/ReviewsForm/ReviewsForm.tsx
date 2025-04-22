import { ChangeEvent, useState } from 'react';
import { RatingStar } from '../RatingStar/RatingStar';
import { RatingValue } from '../../types/rating';
import { postComment } from '../../store/actionAPI';
import { FullOffer, newComment } from '../../types/offers';
import { useAppDispatch } from '../../hooks/useAppDispatch';
type ReviewsFormProps ={
  offerId: FullOffer['id'];
}

const ReviewsForm = ({offerId}: ReviewsFormProps) => {
  const dispatch = useAppDispatch();

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<RatingValue | null>(null);

  const scores: Record<RatingValue, string> = {
    5 : 'perfect',
    4 : 'good',
    3 : 'not bad',
    2 : 'badly',
    1 : 'terribly',
  };

  function handleCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    setComment(event.target.value);
  }

  function handleRatingChange(value: RatingValue){
    setRating(value);
  }

  const isSubmitDisabled = comment.length < 50 && rating === null;

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    if (!isSubmitDisabled){
      const payload: newComment = {comment, rating: Number(rating)};
      dispatch(postComment({offerId: offerId, comment: payload}));
      setComment('');
      setRating(null);
    }
  }


  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(scores).reverse().map(([score, title]) =>(
          <RatingStar key={score} score={Number(score)} rating={Number(rating)} title={title} onRatingChange={handleRatingChange}/>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
      </div>
    </form>
  );
};

export {ReviewsForm};
