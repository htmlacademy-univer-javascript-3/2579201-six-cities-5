type CardRatingProps = {
  percent: string;
}

const CardRating = ({percent}: CardRatingProps) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{ width: percent }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);

export {CardRating};

