import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import LoginForm from '../../pages/login-form/login-form';
import FavoriteOffers from '../../pages/favorite-offers/favorite-offers';
import Offer from '../../pages/offer/offer';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import OffersProps from '../../types/offers';
import ReviewsProps from '../../types/reviews';

type AppPageProps = {
  offersCount: number;
  offers: OffersProps[];
  reviews: ReviewsProps[];
};

function App({ offersCount, offers, reviews }: AppPageProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage offersCount={offersCount} />}
        />

        <Route path={AppRoute.Login} element={<LoginForm />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoriteOffers offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer offers={offers} reviews={reviews} />}
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
