import OfferCard from '../offer-card/offer-card';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { loadOffers } from '../../store/action';
import { useEffect } from 'react';

function OffersList() {
  const chosenCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const chosenOffers = allOffers.filter((el) => el.city === chosenCity);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadOffers(chosenOffers));
  }, [chosenCity, allOffers, dispatch]);

  return (
    <>
      {chosenOffers.map((el) => (
        <OfferCard key={el.id} offers={el} />
      ))}
    </>
  );
}
export default OffersList;
