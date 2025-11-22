import { createReducer } from '@reduxjs/toolkit';
import offers from '../mocks/offers';
import { Cities } from '../constants/constants';
import { loadOffers, loadCity } from './action';
import OffersProps from '../types/offers';

const initialState: StoreState = {
  city: Cities.Paris,
  offers: offers,
  currentCityOffers: [],
};

type StoreState = {
  city: string;
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
    });
});
