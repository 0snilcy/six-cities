import OffersProps from '../../types/offers';
import { useNavigate } from 'react-router-dom';

export type OfferCardProps = {
  offers: OffersProps[];
};

function OfferCard({ offers }: OfferCardProps) {
  const navigate = useNavigate();
  return offers.map((el) => (
    <article key={el.id} className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={el.image}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{el.price}</b>
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
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2
          onClick={(e) => {
            e.preventDefault();
            navigate(`/offer/${el.id}`);
          }}
          className="place-card__name"
        >
          <a href="#">{el.name}</a>
        </h2>
        <p className="place-card__type">{el.type}</p>
      </div>
    </article>
  ));
}
export default OfferCard;
