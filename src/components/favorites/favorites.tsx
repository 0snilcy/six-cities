import { OffersProps } from '../../types/offers';

type FavoritesProp = {
  offers: OffersProps;
};
function Favorites({ offers }: FavoritesProp) {
  return (
    <div className="favorites__places">
      <article className="favorites__card place-card">
        <div className="place-card__mark">
          <span>{}</span>
        </div>
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src={offers.previewImage}
              width={150}
              height={110}
              alt="Place image"
            />
          </a>
        </div>
        <div className="favorites__card-info place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{offers.price}</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: offers.rating }} /> style=
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{offers.title}</a>
          </h2>
          <p className="place-card__type">{offers.type}</p>
        </div>
      </article>
    </div>
  );
}
export default Favorites;
