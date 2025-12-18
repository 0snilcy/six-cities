import OfferCard from '../offer-card/offer-card';
import { OffersProps } from '../../types/offers';

type OtherPlacesListProps = {
  offers: OffersProps[];
};

function OtherPlacesList({ offers }: OtherPlacesListProps) {
  return (
    <>
      {offers.map((el) => (
        <OfferCard key={el.id} offer={el} />
      ))}
    </>
  );
}
export default OtherPlacesList;
