import { OfferType } from '../types/offers';

export const offers: OfferType[] = [{
  'id': 'offer1',
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
  'price': 120,
  'city': {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'isFavorite': true,
  'isPremium': false,
  'rating': 4,
  'previewImage': 'img/apartment-01.jpg'
},
{
  'id': 'offer2',
  'title': 'Wood and Stone place',
  'type': 'apartment',
  'price': 130,
  'city': {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'isFavorite': false,
  'isPremium': false,
  'rating': 1,
  'previewImage': 'img/apartment-02.jpg'
},
{
  'id': 'offer3',
  'title': 'Canal View Prinsengracht',
  'type': 'apartment',
  'price': 140,
  'city': {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'isFavorite': false,
  'isPremium': false,
  'rating': 2,
  'previewImage': 'img/apartment-03.jpg'
},
{
  'id': 'offer4',
  'title': 'Nice, cozy, warm big bed apartment',
  'type': 'apartment',
  'price': 150,
  'city': {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'isFavorite': true,
  'isPremium': true,
  'rating': 3,
  'previewImage': 'img/apartment-01.jpg'
},
];
