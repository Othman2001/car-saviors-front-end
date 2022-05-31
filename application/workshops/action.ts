import { Action, AsyncAction } from "../../config";
import { getDistanceFromLatLonInKm } from "../utlitls/calcDistance";

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
  state.workshops.WorkshopState.loading = false;
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

export const getUserCurrentLocation: Action<{
  userLocation: {
    latitude: number;
    longitude: number;
  };
}> = (
  {
    state: {
      workshops: { WorkshopState },
    },
  },
  { userLocation }
) => {
  WorkshopState.userLocation = userLocation;
};

export const setDistance: AsyncAction = async ({ state, effects }) => {
  if (state.workshops.WorkshopState.workshops) {
    for (let i = 0; i < state.workshops.WorkshopState.workshops.length; i++) {
      if (state.workshops.WorkshopState.userLocation) {
        const distance = getDistanceFromLatLonInKm(
          state.workshops.WorkshopState.userLocation.latitude,
          state.workshops.WorkshopState.userLocation?.longitude,
          state.workshops.WorkshopState.workshops[i].geopoint._latitude,
          state.workshops.WorkshopState.workshops[i].geopoint._longitude
        );
        state.workshops.WorkshopState.workshops[i].distance = distance;
      }
    }
    state.workshops.WorkshopState.workshops =
      state.workshops.WorkshopState.workshops.sort(function (a, b) {
        return a.distance - b.distance;
      });
  }
};
