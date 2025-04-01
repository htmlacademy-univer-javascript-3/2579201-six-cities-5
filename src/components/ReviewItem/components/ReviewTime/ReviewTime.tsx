type ReviewTimeProps = {
  date: string;
}

const ReviewTime = ({date}: ReviewTimeProps) => {
  function formatReviewDate(stringDate: string) {
    const newDate = new Date(stringDate);
    return newDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
  const dateTime = date.split('T')[0];
  return (
    <time className="reviews__time" dateTime={dateTime} >{formatReviewDate(date)}</time>
  );
};

export {ReviewTime};
