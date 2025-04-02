type RatingProps = {
  rating: number;
  pageBlock: string;
}

const Rating = ({rating, pageBlock}: RatingProps) => {
  const ratingPercent = `${(rating / 5) * 100 }%`;
  return (
    <div className={`${pageBlock}__rating rating`}>
      <div className={`${pageBlock}__stars rating__stars`}>
        <span style={{ width: ratingPercent }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {pageBlock === 'offer' && <span className={`${pageBlock}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
};


export {Rating};

