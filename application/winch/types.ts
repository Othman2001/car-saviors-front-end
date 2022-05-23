export type WinchDriverSchema = {
  availability: boolean;
  firstName: string;
  phoneNumber: string;
  geopoint: {
    latitude?: number;
    longitude?: number;
    _latitude?: number;
    _longitude?: number;
  };
  lastName: string;
  role: string;
  id: string;
  distance: number;
};
