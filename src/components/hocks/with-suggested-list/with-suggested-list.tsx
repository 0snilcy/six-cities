import { OfferCardListProps } from '../../offers-list/offers-list';

export function WithSuggestedList(
  OffersList: React.ComponentType<OfferCardListProps>
) {
  return function SuggestedList({ offers }: OfferCardListProps) {
    const suggestedOffers = offers.slice(0, 3);
    return <OffersList offers={suggestedOffers} />;
  };
}
