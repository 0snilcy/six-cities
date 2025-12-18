import { OffersProps } from '../types/offers';

import { createAction } from '@reduxjs/toolkit';
export const loadCity = createAction<string>('City/load');
export const loadOffers = createAction<OffersProps[]>('Offers/load');
export const sortOffers = createAction<string>('Offers/sort');
export const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);
