import OfferCard from '../offer-card/offer-card';
import { useAppSelector } from '../../hooks';
type ListItemHoverProps = {
  onListItemHover: (OfferId: number) => void;
};

function OffersList({ onListItemHover }: ListItemHoverProps) {
  const chosenCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const chosenOffers = allOffers.filter((el) => el.city === chosenCity);
  const sortType = useAppSelector((state) => state.sortType);
  switch (sortType) {
    case 'Price: low to high':
      chosenOffers.sort((a, b) => a.price - b.price);
      break;
    case 'Price: high to low':
      chosenOffers.sort((a, b) => b.price - a.price);
      break;
    case 'Top rated first':
      chosenOffers.sort((a, b) => b.stars - a.stars);
      break;
  }
  return (
    <>
      {chosenOffers.map((el) => (
        <OfferCard key={el.id} offers={el} onOfferEnter={onListItemHover} />
      ))}
    </>
  );
}
export default OffersList;
