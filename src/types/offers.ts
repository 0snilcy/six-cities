export type OffersProps = {
  id: string;
  city: City;
  location: Location;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: string;
  location: Location;
};
