import ReviewsProps from '../../types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: ReviewsProps[];
};

function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((el) => (
        <ReviewsItem key={el.key} reviews={el} />
      ))}
    </ul>
  );
}
export default ReviewsList;
