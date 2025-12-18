import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../constants/constants';
import { loadOffers, loadCity, sortOffers } from './action';
import { OffersProps } from '../types/offers';
import { setOffersLoadingStatus } from './action';
import { AuthorizationStatus } from '../constants/constants';

const initialState: StoreState = {
  city: Cities.Paris,
  sortType: 'Popular',
  offers: [],
  currentCityOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
};

type StoreState = {
  city: string;
  sortType: string;
  offers: OffersProps[];
  currentCityOffers: OffersProps[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
