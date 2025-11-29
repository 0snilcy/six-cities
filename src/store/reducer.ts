import { createReducer } from '@reduxjs/toolkit';
import offers from '../mocks/offers';
import { Cities } from '../constants/constants';
import { loadOffers, loadCity, sortOffers } from './action';
import OffersProps from '../types/offers';
const initialState: StoreState = {
  city: Cities.Paris,
  sortType: 'Popular',
  offers: offers,
  currentCityOffers: [],
};

type StoreState = {
  city: string;
  sortType: string;
  offers: OffersProps[];
  currentCityOffers: OffersProps[];
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.currentCityOffers = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
    });
});
