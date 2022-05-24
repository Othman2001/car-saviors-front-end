import { Action, AsyncAction } from "../../config";
import { setDoc, doc } from "firebase/firestore";
// @ts-ignore
import { db } from "../../infstracture/firebase";
// @ts-ignore

export const fetchDrivers: AsyncAction<{ lat: any; lng: any }> = async (
  { state, effects },
  { lat, lng }
) => {
  const drivers: [] = await effects.winch.fetchDrivers({ lat, lng });

  for (let i = 0; i < drivers.length; i++) {}

  state.winch.winchDrivers = drivers;
  state.winch.currentDriverIndex = 0;
  // @ts-ignore
  state.winch.currentWinchDriverId = drivers[0].id;
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
  if (state.winch.origin && state.winch.destination) {
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
    state.winch.price = state.winch.travelTimeInformation.distance.value * 200;
  }
};

export const getTheNextDriver: Action = ({
  state: {
    authentication: { user },
    winch: {
      winchDrivers,
      currentDriverIndex,
      currentWinchDriverId,
      destination,
      origin,
    },
  },
  effects,
}) => {
  if (winchDrivers.length > 0) {
    winchDrivers.shift();
    //  @ts-ignore
    currentWinchDriverId = winchDrivers[0].id;
    // @ts-ignore
    setDoc(doc(db, "PendingRequets", currentWinchDriverId), {
      //  @ts-ignore
      winchDriverId: currentWinchDriverId,
      //  @ts-ignore
      winchDriverName:
        //  @ts-ignore
        winchDrivers[0].firstName + " " + winchDrivers[0].lastName,
      //  @ts-ignore
      winchDriverPhone: winchDrivers[0].phoneNumber,
      userName: user?.displayName,
      userId: user?.uid,
      id: currentDriverIndex,
      userDestination: {
        latitude: destination.lat,
        longitude: destination.lng,
      },
      destination: {
        latitude: origin.lat,
        longitude: origin.lng,
      },
    });
  } else {
    currentWinchDriverId = "fake";
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
export const setPrice: Action = ({ state }) => {
  if (state.winch.winchDrivers[0]) {
    state.winch.price = state.winch.winchDrivers[0].price;
  }
};

export const setWinchDriverId: Action<{ winchDriverId: string }> = (
  { state },
  { winchDriverId }
) => {
  state.winch.currentWinchDriverId = winchDriverId;
};
