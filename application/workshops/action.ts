import { Action, AsyncAction } from "../../config";
import { getDistanceFromLatLonInKm } from "./utlitls/calcDistance";

export const fetchBrands: AsyncAction = async ({ state, effects }) => {
  state.workshops.WorkshopState.loading = true;
  state.workshops.WorkshopState.brands = await effects.workshops.fetchBrands();
  state.workshops.WorkshopState.loading = false;
};

export const fetchWorkshops: AsyncAction<{ brandName: string }> = async (
  { state, effects },
  { brandName }
) => {
  state.workshops.WorkshopState.loading = true;
  state.workshops.WorkshopState.workshops =
    await effects.workshops.fetchWorkshops({ brandName });
};

export const bookDate: AsyncAction<{
  workshopName: string;
  workshopId: string;
  userId: string;
  userName: string;
  pickedDate: string | Date;
}> = async (
  { state, effects },
  { workshopId, workshopName, userId, userName, pickedDate }
) => {
  state.workshops.WorkshopState.visitId = "";
  state.workshops.WorkshopState.visitId = await effects.workshops.bookDate({
    workshopId,
    workshopName,
    userId,
    userName,
    pickedDate,
  });
};

export const setDistance: Action = ({ state, effects }) => {
  if (state.workshops.WorkshopState.workshops) {
    for (let i = 0; i < state.workshops.WorkshopState.workshops.length; i++) {
      const distance = getDistanceFromLatLonInKm(
        parseInt("29.840195"),
        parseInt("31.331761"),
        state.workshops.WorkshopState.workshops[i].geopoint._latitude,
        state.workshops.WorkshopState.workshops[i].geopoint._longitude
      );
      console.log(distance, "distance");
      state.workshops.WorkshopState.workshops[i].distance = distance;
    }
    state.workshops.WorkshopState.workshops =
      state.workshops.WorkshopState.workshops.sort(function (a, b) {
        return a.distance - b.distance;
      });
  }
};
