import OfferCard from '../offer-card/offer-card';
import OffersProps from '../../types/offers';
import { useAppSelector } from '../../hooks';

export type OfferCardListProps = {
  offers: OffersProps[];
};

function OffersList({ offers }: OfferCardListProps) {
  const chosenCity = useAppSelector((state) => state.city);
  const offersState = useAppSelector((state) => state.cityOffers);
  const chosenOffers = offersState.filter((el) => el.city === chosenCity);
  if (!offers) {
    return <div></div>;
  }
  return (
    <>
      {chosenOffers.map((el) => (
        <OfferCard key={el.id} offers={el} />
      ))}
    </>
  );
}
export default OffersList;
