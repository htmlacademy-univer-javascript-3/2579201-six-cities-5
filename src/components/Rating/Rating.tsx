type RatingProps = {
  rating: number;
  pageBlock: string;
}

const Rating = ({rating, pageBlock}: RatingProps) => {
  const ratingPercent = `${(rating / 5) * 100 }%`;
  return (
    <div className={`${pageBlock} rating__stars`}>
      <span style={{ width: ratingPercent }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};


export {Rating};

