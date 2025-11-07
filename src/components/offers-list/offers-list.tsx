import OfferCard from '../offer-card/offer-card';
import OffersProps from '../../types/offers';
import { WithSuggestedList } from '../hocks/with-suggested-list/with-suggested-list';
export type OfferCardListProps = {
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

export const WrappedSuggestedList = WithSuggestedList(OffersList);
