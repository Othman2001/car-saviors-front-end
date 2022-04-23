import { Action, AsyncAction } from "../../config";

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
  console.log(price, "price");
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
    state.rental.message = await effects.rental.rentCar({
      total: state.rental.totalPrice,
      startDate: state.rental.startDate.toISOString(),
      endDate: state.rental.endDate.toISOString(),
      daysCount: state.rental.daysCount,
      userId: state.authentication.user?.uid,
      carOwnerId,
      carId,
    });
    state.rental.totalPrice = 0;
    state.rental.daysCount = 0;
    state.rental.startDate = null;
    state.rental.endDate = null;
  }
};
