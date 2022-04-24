export type carSchema = {
  id: string;
  carModel: string;
  rating: number;
  CarColor: string;
  carOwnerId: string;
  carId: string;
  carType: string;
  pricePerDay: number;
  carBrand: string;
  carModelYear: string;
  images: [string];
  motorType: string;
  location: string;
};

interface IRentalState {
  cars: [carSchema] | null;
  loading: boolean;
  extraInsurance: number;
  totalPrice: number;
  startDate: Date | null;
  endDate: Date | null;
  daysCount: number;
  rentalPrice: number;
  error: string | null;
  message: string | null;
}

export const rentalState: IRentalState = {
  cars: null,
  loading: false,
  extraInsurance: 1000,
  totalPrice: 0,
  startDate: null,
  endDate: null,
  daysCount: 0,
  rentalPrice: 0,
  error: null,
  message: null,
};
