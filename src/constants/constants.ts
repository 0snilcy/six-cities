import {
  loadParis,
  loadCologne,
  loadBrussels,
  loadAmsterdam,
  loadHamburg,
  loadDusseldorf,
} from '../store/action';
import { citiesListProps } from '../types/citiesList';
export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};
export const citiesList: citiesListProps[] = [
  {
    id: 1,
    city: 'Paris',
    action: loadParis,
  },
  {
    id: 2,
    city: 'Cologne',
    action: loadCologne,
  },
  {
    id: 3,
    city: 'Brussels',
    action: loadBrussels,
  },
  {
    id: 4,
    city: 'Amsterdam',
    action: loadAmsterdam,
  },
  {
    id: 5,
    city: 'Hamburg',
    action: loadHamburg,
  },
  {
    id: 6,
    city: 'Dusseldorf',
    action: loadDusseldorf,
  },
];

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
