import { Action, AsyncAction } from "../../config";
import { state } from "../authentication/state";
import { RequestSchema, WinchDriverSchema } from "./types";
// @ts-ignore

export const fetchDrivers: AsyncAction<{ lat: any; lng: any }> = async (
  { state, effects },
  { lat, lng }
) => {
  const drivers: WinchDriverSchema[] = await effects.winch.fetchDrivers({
    lat,
    lng,
  });

  state.winch.winchDrivers = drivers;
  state.winch.currentDriverIndex = 0;
  // @ts-ignore
  state.winch.currentWinchDriverId = drivers[0].id;
  state.winch.driverOrigin = {
    latitude: drivers[0].geopoint.latitude || drivers[0].geopoint._latitude,
    longitude: drivers[0].geopoint.longitude || drivers[0].geopoint._longitude,
  };
  return drivers;
};

// @ts-ignore
export const setOrigin: Action<{
  origin: {
    location: { lat: number; lng: number };
    description: string;
  };
}> = ({ state }, origin) => {
  state.winch.origin = origin.origin;
};
export const setDestination: Action<{
  destination: {
    location: { lat: number; lng: number };
    description: string;
  };
}> = ({ state }, destination) => {
  state.winch.destination = destination.destination;
};
export const setTravelTimeInformation: AsyncAction = async ({
  state,
  effects,
}) => {
  if (state.winch.origin && state.winch.driverOrigin) {
    if (state.winch.origin.lat != 1 && state.winch.driverOrigin.lat != 1)
      state.winch.travelTimeInformation =
        await effects.winch.getTravelDistanceInformation({
          origin: {
            lat: state.winch.driverOrigin.latitude,
            lng: state.winch.driverOrigin.longitude,
          },
          destination: {
            lat: state.winch.origin.lat,
            lng: state.winch.origin.lng,
          },
        });
  }
};

export const getTheNextDriver: Action = ({
  state: {
    winch: { winchDrivers },
  },
}) => {
  winchDrivers.shift();
};

export const goOnline: Action = ({ state }) => {
  state.winch.online = true;
};

export const goOffline: Action = ({ state }) => {
  state.winch.online = false;
};

export const setUserOrigin: Action<{ userOrigin: any }> = (
  { state },
  { userOrigin }
) => {
  state.winch.userOrigin = userOrigin;
};

export const setDriverOrigin: Action<{ driverOrigin: any }> = (
  { state },
  { driverOrigin }
) => {
  state.winch.driverOrigin = driverOrigin;
};
export const setDriverDestination: Action<{ driverDestination: any }> = (
  { state },
  { driverDestination }
) => {
  state.winch.driverDestination = driverDestination;
};

export const setUserDestination: Action<{ userDestination: any }> = (
  { state },
  { userDestination }
) => {
  state.winch.userDestination = userDestination;
};

export const rejectRequest: Action = ({ state, effects }) => {
  state.winch.userDestination = "";
  state.winch.driverDestination = "";
  state.winch.userOrigin = "";
  state.winch.driverOrigin = "";
  state.winch.destination = "";
  state.winch.origin = "";
  state.winch.travelTimeInformation = "";
  state.winch.currentDriverIndex = 0;
};
export const setPrice: Action = ({ state }) => {
  if (state.winch.winchDrivers[0]) {
    state.winch.price =
      Math.round(state.winch.winchDrivers[0].price * 100) / 100;
  }
};

export const setWinchDriverId: Action<{ winchDriverId: string }> = (
  { state },
  { winchDriverId }
) => {
  state.winch.currentWinchDriverId = winchDriverId;
};

export const setRequest: Action<{ request: RequestSchema }> = (
  { state: { winch } },
  { request }
) => {
  winch.request = request;
};

export const setRequestState: Action<{ requestState: boolean }> = (
  { state: { winch } },
  { requestState }
) => {
  winch.requestState = requestState;
};

export const resetTheStore: Action = ({ state: { winch } }) => {
  winch.userDestination = "";
  winch.driverDestination = "";
  winch.userOrigin = "";
  winch.driverOrigin = "";
  winch.destination = "";
  winch.origin = "";
  winch.travelTimeInformation = "";
  winch.currentDriverIndex = 0;
  winch.currentWinchDriverId = "";
  winch.price = 0;
  winch.request = null;
  winch.requestState = false;
  winch.tripFinished = false;
};

export const clearFields: Action = ({ state: { winch } }) => {
  winch.origin = {
    lat: 1,
    long: 1,
  };
  winch.destination = {
    lat: 1,
    long: 1,
  };
  winch.driverOrigin = {
    lat: 1,
    long: 1,
  };
  winch.travelTimeInformation = null;
};
export const finishTheTrip: Action = ({ state }) => {
  state.winch.tripFinished = true;
};

export const setRejection: Action<{ isRejected: boolean }> = (
  { state },
  { isRejected }
) => {
  state.winch.isRejected = isRejected;
};

export const setStayAtHome: Action<{ stayAtHome: boolean }> = (
  { state: { winch } },
  { stayAtHome }
) => {
  winch.stayAtHome = stayAtHome;
};
