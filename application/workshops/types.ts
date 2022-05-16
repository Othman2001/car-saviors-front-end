export type brandSchema = {
  name: string;
  imageUrl: string;
};
export type workshopSchema = {
  name: string;
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
};
