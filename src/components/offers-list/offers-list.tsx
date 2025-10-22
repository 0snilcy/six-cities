import OfferCard from '../offer-card/offer-card';
import OffersProps from '../../types/offers';

type OfferCardListProps = {
  offers: OffersProps[];
};
function OffersList({ offers }: OfferCardListProps) {
  return (
    <>
      {offers.map((el) => (
        <OfferCard key={el.id} offers={el} />
      ))}
    </>
  );
}
export default OffersList;
