import { useActions } from "../../config";

export const useWinchActions = () => {
  const {
    winch: {
      fetchDrivers,
      getTheNextDriver,
      goOffline,
      goOnline,
      requestWinchDriver,
      setDestination,
      setDriverData,
      setDriverDestination,
      setDriverOrigin,
      setOrigin,
      setTravelTimeInformation,
      setUserOrigin,
      setUserDestination,
      rejectRequest,
    },
  } = useActions();

  return {
    fetchDrivers,
    getTheNextDriver,
    goOffline,
    goOnline,
    requestWinchDriver,
    setDestination,
    setDriverData,
    setDriverDestination,
    setDriverOrigin,
    setOrigin,
    setTravelTimeInformation,
    setUserOrigin,
    setUserDestination,
    rejectRequest,
  };
};
