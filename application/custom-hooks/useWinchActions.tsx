import { useActions } from "../../config";

export const useWinchActions = () => {
  const {
    winch: {
      fetchDrivers,
      getTheNextDriver,
      goOffline,
      goOnline,
      setDestination,
      setDriverDestination,
      setDriverOrigin,
      setOrigin,
      setTravelTimeInformation,
      setUserOrigin,
      setUserDestination,
      rejectRequest,
      setPrice,
      setWinchDriverId,
    },
  } = useActions();

  return {
    fetchDrivers,
    getTheNextDriver,
    goOffline,
    goOnline,
    setDestination,
    setDriverDestination,
    setDriverOrigin,
    setOrigin,
    setTravelTimeInformation,
    setUserOrigin,
    setUserDestination,
    rejectRequest,
    setPrice,
    setWinchDriverId,
  };
};
