export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};
export const citiesList: CitiesListProps[] = [
  {
    id: 1,
    city: 'Paris',
  },
  {
    id: 2,
    city: 'Cologne',
  },
  {
    id: 3,
    city: 'Brussels',
  },
  {
    id: 4,
    city: 'Amsterdam',
  },
  {
    id: 5,
    city: 'Hamburg',
  },
  {
    id: 6,
    city: 'Dusseldorf',
  },
];

export type CitiesListProps = {
  id: number;
  city: string;
};

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
