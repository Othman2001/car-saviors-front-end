import { AsyncAction } from "../../config";

export const fetchCars: AsyncAction = async ({ state, effects }) => {
  state.rental.loading = true;
  state.rental.cars = await effects.rental.fetchCars();
};
