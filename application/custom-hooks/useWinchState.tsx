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
  };
};
