import ReviewsProps from '../../types/reviews';

type ReviewProp = {
  reviews: ReviewsProps;
};

function ReviewsItem({ reviews }: ReviewProp) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={reviews.userPhoto}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{reviews.user}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: reviews.userRate }} />
            <span className="visually-hidden"></span>
          </div>
        </div>
        <p className="reviews__text">{reviews.info}</p>
        <time className="reviews__time" dateTime={reviews.date}>
          {reviews.date}
        </time>
      </div>
    </li>
  );
}
export default ReviewsItem;
