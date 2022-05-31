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
  price: number;
};

export type RequestSchema = {
  destination: {
    latitude: number;
    longitude: number;
  };
  firstName: string;
  lastName: string;
  userId: string | null | undefined;
  userName: string | null | undefined;
  winchDriverId: string;
  userDestination: {
    latitude: number;
    longitude: number;
  };
  price: number;
  isAcccepted: boolean;
  isFinished: boolean;
};
