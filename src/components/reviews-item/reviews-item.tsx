import ReviewsProps from '../../types/reviews';

type ReviewProp = {
  review: ReviewsProps;
};

function ReviewsItem({ review }: ReviewProp) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.userPhoto}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: review.userRate }} />
            <span className="visually-hidden"></span>
          </div>
        </div>
        <p className="reviews__text">{review.info}</p>
        <time className="reviews__time" dateTime={review.date}>
          {review.date}
        </time>
      </div>
    </li>
  );
}
export default ReviewsItem;
