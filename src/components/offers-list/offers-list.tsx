import offers from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';
function OffersList() {
  return <OfferCard offers={offers} />;
}
export default OffersList;
