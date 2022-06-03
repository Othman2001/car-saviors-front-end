export type brandSchema = {
  name: string;
  imageUrl: string;
};

export type workshopSchema = {
  name: string;
  brandName: string;
  id: string;
  geopoint: {
    _latitude: number;
    _longitude: number;
  };
  distance: number;
  location: string;
  openHours: string;
  closeHours: string;
  description: string;
  descriptionAr: string;
  docId: string;
};

export type ReviewSchema = {
  id: string;
  userId: string;
  userName: string;
  workshopId: string;
  comment: string;
  createdAt: string;
};
