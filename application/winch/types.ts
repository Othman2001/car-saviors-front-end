export type WinchDriverSchema = {
  availability: boolean;
  firstName: string;
  phoneNumber: string;
  geopoint: {
    latitude: number;
    longitude: number;
  };
  lastName: string;
  role: string;
  userId: string;
  distance: number;
};
