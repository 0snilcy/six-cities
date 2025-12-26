import { createReducer } from '@reduxjs/toolkit';
import { Cities, AuthorizationStatus } from '../constants/constants';
import {
  loadOffers,
  loadCity,
  sortOffers,
  setOffersLoadingStatus,
  requireAuthorization,
  setError,
} from './action';
import { OffersProps } from '../types/offers';

const initialState: StoreState = {
  city: Cities.Paris,
  sortType: 'Popular',
  offers: [],
  currentCityOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
};

type StoreState = {
  city: string;
  sortType: string;
  offers: OffersProps[];
  currentCityOffers: OffersProps[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
