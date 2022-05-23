import { useActions } from "../../config";

export const useWinchActions = () => {
  const {
    winch: {
      fetchDrivers,
      getTheNextDriver,
      goOffline,
      goOnline,

      setDestination,
      setDriverData,
      setDriverDestination,
      setDriverOrigin,
      setOrigin,
      setTravelTimeInformation,
      setUserOrigin,
      setUserDestination,
      rejectRequest,
      setPrice,
    },
  } = useActions();

  return {
    fetchDrivers,
    getTheNextDriver,
    goOffline,
    goOnline,
    setDestination,
    setDriverData,
    setDriverDestination,
    setDriverOrigin,
    setOrigin,
    setTravelTimeInformation,
    setUserOrigin,
    setUserDestination,
    rejectRequest,
    setPrice,
  };
};
