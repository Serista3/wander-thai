export type NavItem = {
  href: string;
  label: string;
};

export type Category = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type MessageNoti = {
  message: string;
  success: boolean;
};

export type Place = {
  id: string;
  name: string;
  category: string;
  tags: string[];
  province: string;
  rating: number;
  status: string;
  description_short: string;
  description_full: string;
  budget: string;
  entrance_fee: number;
  opening_hours: string;
  tips: string;
  travel_method: string;
  latitude: number;
  longitude: number;
  gallery: string[];
};

export type Favorite = {
  id: string;
  placeId: string;
}