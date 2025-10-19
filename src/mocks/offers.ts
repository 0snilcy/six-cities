import OffersProps from '../types/offers';
const offers: OffersProps[] = [
  {
    id: 1,
    image:
      'https://www.magazindomov.ru/wp-content/uploads/2013/11/Beverly-Hills-House-10.jpg',
    price: '300$',
    stars: '100%',
    name: 'Wonderful house',
    type: 'House',
    rooms: 4,
    numberOfGuests: 4,
    facilities: [
      'Wi - Fi, ',
      'Kitchen, ',
      'Dishwasher, ',
      'Coffee machine, ',
      'Heating, ',
      'Cabel TV, ',
    ],
    hostPhoto:
      'https://avatars.mds.yandex.net/get-yapic/27232/AET5BT9wsGqH5PebAqSp7VrHfvc-1/orig',
    hostName: 'Mike',
    hostStatus: 'Pro',
    description: 'The best place you have ever been!',
    mark: 'Premium',
  },

  {
    id: 2,
    image:
      'https://www.m2.by/upload/images/articles/items/471954245599e4fc0a0cbb0.26310516.jpeg',
    price: '30$',
    stars: '60%',
    name: 'Simple flat',
    type: 'Flat',
    rooms: 2,
    numberOfGuests: 2,
    facilities: ['Wi - Fi, ', 'Kitchen, ', 'Fridge, '],
    hostPhoto:
      'https://i.pinimg.com/736x/cc/6c/2a/cc6c2a6e8daa754b9b96e0604634a368.jpg',
    hostName: 'Alberta',
    hostStatus: 'New',
    description: 'Enjoy your stay!',
    mark: 'Budget',
  },
  {
    id: 3,
    image:
      'https://cdn.home-designing.com/wp-content/uploads/2017/03/black-frame-sliding-doors.jpg',
    price: '250$',
    stars: '100%',
    name: 'Luxury apartments',
    type: 'Apartments',
    rooms: 3,
    numberOfGuests: 3,
    facilities: [
      'Wi - Fi, ',
      'Kitchen, ',
      'Dishwasher, ',
      'Coffee machine, ',
      'Heating, ',
      'Fridge, ',
      'Towels, ',
      'Cabel TV, ',
    ],
    hostPhoto:
      'https://www.yourtango.com/sites/default/files/image_blog/enfj-personality-traits.png',
    hostName: 'Julie',
    hostStatus: 'Master',
    description: 'You will love being here',
    mark: 'Luxury',
  },
  {
    id: 4,
    image:
      'https://www.krist.ru/files/mToursNomersGallery/835/1d82b699e70a1e19d72a56793c71993c_3782_.jpg',
    price: '80$',
    stars: '80%',
    name: 'One bed hotel room',
    type: 'Hotel',
    rooms: 1,
    numberOfGuests: 2,
    facilities: ['Wi - Fi, ', 'Cabel TV, ', 'Towels, ', 'Fridge, '],
    hostPhoto:
      'https://i.pinimg.com/originals/d2/ff/cf/d2ffcfec3cfd7fba48bcc0325cc2bea9.png',
    hostName: 'Jason',
    hostStatus: 'Pro',
    description: 'Cozy hotel room',
    mark: 'Comfortable',
  },
];
export default offers;
