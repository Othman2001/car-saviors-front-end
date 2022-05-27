import { useAppState } from "../../config";

export const useWinchState = () => {
  const {
    winch: {
      currentDriverIndex,
      destination,
      driverDestination,
      driverOrigin,
      nearestDriver,
      online,
      origin,
      travelTimeInformation,
      userOrigin,
      userType,
      winchDrivers,
      userDestination,
      price,
      request,
      currentWinchDriverId,
      requestState,
      tripFinished,
    },
  } = useAppState();

  return {
    currentDriverIndex,
    destination,
    driverDestination,
    driverOrigin,
    nearestDriver,
    online,
    origin,
    travelTimeInformation,
    userOrigin,
    userType,
    winchDrivers,
    userDestination,
    price,
    request,
    currentWinchDriverId,
    requestState,
    tripFinished,
  };
};
