import { OffersProps } from '../types/offers';
import { AuthorizationStatus } from '../constants/constants';
import { createAction } from '@reduxjs/toolkit';
export const loadCity = createAction<string>('City/load');
export const loadOffers = createAction<OffersProps[]>('Offers/load');
export const sortOffers = createAction<string>('Offers/sort');
export const setOffersLoadingStatus = createAction<boolean>(
  'data/setOffersLoadingStatus'
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setError = createAction<string | null>('offers/setError');
