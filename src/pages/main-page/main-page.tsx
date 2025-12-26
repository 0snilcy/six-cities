import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppSelector } from '../../hooks';
import { useState } from 'react';
import { SortOptions } from '../../components/sort-options/sort-options';
import { OffersProps } from '../../types/offers';
import { LoggedHeader } from '../../components/loged-header/loged-header';
import { Header } from '../../components/header/header';
import { AuthorizationStatus } from '../../constants/constants';

function MainPage(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<OffersProps | undefined>(
    undefined
  );
  const allOffers = useAppSelector((state) => state.offers);

  const handleListItemHover = (OfferId: string) => {
    const currentPoint = allOffers.find((el) => el.id === OfferId);
    setSelectedPoint(currentPoint);
  };
  const chosenCity = useAppSelector((state) => state.city);

  const filteredOffers = allOffers.filter((el) => el.city.name === chosenCity);
  const isLogged = useAppSelector(
    (state) => state.authorizationStatus === AuthorizationStatus.Auth
  );
  return (
    <div className="page page--gray page--main">
      {isLogged ? <LoggedHeader /> : <Header />}
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
