import OfferCard from '../offer-card/offer-card';
import { useAppSelector } from '../../hooks';

function OffersList() {
  const chosenCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const chosenOffers = allOffers.filter((el) => el.city === chosenCity);
  return (
    <>
      {chosenOffers.map((el) => (
        <OfferCard key={el.id} offers={el} />
      ))}
    </>
  );
}
export default OffersList;
