import { useParams } from 'react-router-dom';
import { OffersProps } from '../../types/offers';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsProps from '../../types/reviews';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import OtherPlacesList from '../../components/other-places-list/other-places-list';
import { useAppSelector } from '../../hooks';
import { LoggedHeader } from '../../components/loged-header/loged-header';
import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../constants/constants';

export type OfferProps = {
  offers: OffersProps[];
  reviews: ReviewsProps[];
};
function Offer({ offers, reviews }: OfferProps) {
  const isLogged = useAppSelector(
    (state) => state.authorizationStatus === AuthorizationStatus.Auth
  );
  const { id } = useParams();
  const offer = offers.find((item) => item.id === String(id));

  if (!offer) {
    return <p>Объявление не найдено</p>;
  }
  const filteredReviews = reviews.filter((item) => item.id === Number(id));
  const offersMap = offers.slice(0, 3);

  return (
    <div className="page">
      {isLogged ? <LoggedHeader /> : <Header />}
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offer.previewImage}
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offer.previewImage}
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src={offer.previewImage}
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>{}isPremium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${offer.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value"></span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  rooms {} Bedroom/s
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What is inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item"> facilities{}</li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={'/'}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{}hostName</span>
                  <span className="offer__user-status">{}hostStatus</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">{}description</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews{' '}
                  <span className="reviews__amount">
                    {filteredReviews.length}
                  </span>
                </h2>
                <ReviewsList reviews={filteredReviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map offers={offersMap} />
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OtherPlacesList offers={offersMap} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default Offer;
