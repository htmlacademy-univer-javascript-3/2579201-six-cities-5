type CardRatingProps = {
  rating: number;
}

const CardRating = ({rating}: CardRatingProps) => {
  const ratingPercent = `${(rating / 5) * 100 }%`;
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: ratingPercent }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
};


export {CardRating};

