import ReviewsProps from '../../types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: ReviewsProps[];
};

function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((el, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ReviewsItem key={`${index}_${el.id}`} review={el} />
      ))}
    </ul>
  );
}
export default ReviewsList;
