import { createReducer } from '@reduxjs/toolkit';
import offers from '../mocks/offers';
import { Cities } from '../constants/constants';
import {
  loadParis,
  loadCologne,
  loadBrussels,
  loadAmsterdam,
  loadHamburg,
  loadDusseldorf,
  loadOffers,
} from './action';

const initialState = {
  city: Cities.Paris,
  offers: offers,
  currentCityOffers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadParis, (state) => {
      state.city = Cities.Paris;
    })
    .addCase(loadCologne, (state) => {
      state.city = Cities.Cologne;
    })
    .addCase(loadBrussels, (state) => {
      state.city = Cities.Brussels;
    })
    .addCase(loadAmsterdam, (state) => {
      state.city = Cities.Amsterdam;
    })
    .addCase(loadHamburg, (state) => {
      state.city = Cities.Hamburg;
    })
    .addCase(loadDusseldorf, (state) => {
      state.city = Cities.Dusseldorf;
    })
    .addCase(loadOffers, (state, action) => {
      state.currentCityOffers = action.payload;
    });
});
