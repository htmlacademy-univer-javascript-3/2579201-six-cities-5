import { RatingValue } from './rating';

export type CityName = 'Amsterdam' | 'Paris' | 'Cologne' | 'Brussels' | 'Hamburg' | 'Dusseldorf';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Point = {
  latitude: number;
  longitude: number;
};

export type City = {
  name: CityName;
  location: Location;
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  };

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: RatingValue;
  previewImage: string;
  }

export type FullOffer = OfferType & {
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
  };

export type Comment = {
    id: string;
    date: string;
    user: Host;
    comment: string;
    rating: number;
}

export type newComment = {
  comment: string;
  rating: number;
};
