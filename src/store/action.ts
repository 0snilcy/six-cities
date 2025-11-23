import OffersProps from '../types/offers';
import { createAction } from '@reduxjs/toolkit';
export const loadCity = createAction<string>('City/load');
export const loadOffers = createAction<OffersProps[]>('Offers/load');
