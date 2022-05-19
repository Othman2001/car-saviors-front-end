import { Action, AsyncAction } from "../../config";
import { doc, setDoc, getFirestore } from "firebase/firestore";
// import { db } from "../../infstracture/firebase";
import { uid } from "uid";

export const fetchDrivers: AsyncAction<{ lat: any; lng: any }> = async (
  { state, effects },
  { lat, lng }
) => {
  const drivers = await effects.winch.fetchDrivers({ lat, lng });
  state.winch.winchDrivers = drivers;
  state.winch.currentDriverIndex = 0;

  return drivers;
};

// @ts-ignore
export const requestWinchDriver: AsyncAction = ({ state, effects }) => {};

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
  if (state.winch.origin && state.winch.destination) {
    state.winch.travelTimeInformation =
      await effects.winch.getTravelDistanceInformation({
        origin: state.winch.origin,
        destination: state.winch.destination,
      });
  }
};

export const getTheNextDriver: Action = ({ state, effects }) => {};

export const setDriverData: Action<{}> = ({
  state: { authentication, winch },
}) => {
  if (authentication.currentUserRole === "driver") {
  }
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
  state.winch.winchDrivers = [];
};
