import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';
import { SortOptions } from '../../components/sort-options/sort-options';
import offers from '../../mocks/offers';
import OffersProps from '../../types/offers';

function MainPage(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<OffersProps | undefined>(
    undefined
  );
  const handleListItemHover = (OfferId: number) => {
    const currentPoint = offers.find((el) => el.id === OfferId);
    setSelectedPoint(currentPoint);
  };
  const chosenCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const filteredOffers = allOffers.filter((el) => el.city === chosenCity);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {filteredOffers.length} places to stay in {chosenCity}
              </b>
              <SortOptions />
              <div className="cities__places-list places__list tabs__content">
                <OffersList onListItemHover={handleListItemHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={filteredOffers} selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainPage;
