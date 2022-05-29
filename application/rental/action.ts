import { Action, AsyncAction } from "../../config";
import { RentalRequestSchema } from "./types";

var getDaysArray = function (start: string, end: string) {
  for (
    var arr = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(dt.toISOString());
  }
  return arr;
};

export const fetchCars: AsyncAction = async ({ state, effects }) => {
  state.rental.loading = true;
  state.rental.cars = await effects.rental.fetchCars();
};

export const setDates: Action<{ startDate: string; endDate: string }> = (
  { state, effects },
  { startDate, endDate }
) => {
  const sd = startDate.substring(0, 10);
  const ed = endDate.substring(0, 10);
  const startDates = new Date(sd);
  const endDates = new Date(ed);
  const count = endDates.getTime() - startDates.getTime();

  state.rental.startDate = startDates;
  state.rental.endDate = endDates;
  state.rental.daysCount = count / (1000 * 60 * 60 * 24);
};

export const setTotal: Action<{ pricePerDay: number }> = (
  { state: { rental } },
  { pricePerDay }
) => {
  const price = pricePerDay * rental.daysCount;
  const insurance = 1000;
  rental.rentalPrice = price;
  const total = price + insurance;
  rental.totalPrice = total;
};
export const rentCar: AsyncAction<{
  carOwnerId: string;
  carId: string;
}> = async ({ state, effects }, { carId, carOwnerId }) => {
  if (
    state.rental.startDate &&
    state.rental.endDate &&
    state.rental.totalPrice &&
    state.rental.daysCount &&
    state.authentication.user &&
    state.rental.cars
  ) {
    const startDate = state.rental.startDate.toISOString();
    const endDate = state.rental.endDate.toISOString();
    await effects.rental
      .rentCar({
        total: state.rental.totalPrice,
        dates: getDaysArray(startDate, endDate),
        startDate,
        endDate,
        daysCount: state.rental.daysCount,
        userId: state.authentication.user?.uid,
        carOwnerId,
        carId,
      })
      .then((res) => {
        state.rental.message = res.data.message;
      })
      .catch((error) => {
        console.log("error", "catch error");
        state.rental.message = error;
      });
    state.rental.rentalPrice = 0;
    state.rental.totalPrice = 0;
    state.rental.daysCount = 0;
  }
};

export const registerAsCarOwner: AsyncAction<{
  phoneNumber: string;
  carModel: string;
  carColor: string;
  carNumber: string;
  userId: string;
  imageUrl: string;
  address: string;
  bodyType: string;
  modelYear: string;
  motorType: string;
  carBrand: string;
  pricePerDay: number;
}> = async (
  { state, effects, actions },
  {
    phoneNumber,
    carModel,
    carColor,
    carNumber,
    userId,
    imageUrl,
    address,
    bodyType,
    modelYear,
    motorType,
    carBrand,
    pricePerDay,
  }
) => {
  state.rental.loading = true;
  effects.rental
    .registerAsCarOwner({
      phoneNumber,
      carModel,
      carColor,
      carNumber,
      userId,
      imageUrl,
      address,
      bodyType,
      modelYear,
      motorType,
      carBrand,
      pricePerDay,
    })
    .then((res) => {
      state.rental.message = res.message;
    })
    .catch((error) => {
      state.rental.error = error.message;
    });

  state.rental.loading = false;
  actions.authentication.SignOut();
};

export const resetState: Action = ({ state }) => {
  state.rental.error = null;
  state.rental.message = null;
};

export const setRentalRequest: Action<{ requests: RentalRequestSchema[] }> = (
  { state: { rental } },
  { requests }
) => {
  rental.requests = requests;
};
