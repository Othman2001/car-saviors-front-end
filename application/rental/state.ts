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
  pickedDate: Date | null;
  extraInsurance: number;
  totalPrice: number;
}

export const rentalState: IRentalState = {
  cars: null,
  loading: false,
  pickedDate: null,
  extraInsurance: 1000,
  totalPrice: 0,
};
