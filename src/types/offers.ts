type OffersProps = {
  id: number;
  city: string;
  lat: number;
  lng: number;
  image: string;
  price: number;
  stars: number;
  name: string;
  type: string;
  rooms: number;
  numberOfGuests: number;
  facilities: string[];
  hostPhoto: string;
  hostName: string;
  hostStatus: string;
  description: string;
  mark: string;
};

export default OffersProps;
