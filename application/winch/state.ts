import { WinchDriverSchema } from "./types";

interface IWinchState {
  winchDrivers: [WinchDriverSchema] | [];
  nearestDriver: WinchDriverSchema | undefined;
  origin: any;
  destination: any;
  travelTimeInformation: any;
  currentDriverIndex: number;
  userType: string;
  driverOrigin: any;
  driverDestination: any;
  online: boolean;
  userOrigin: any;
  userDestination: any;
}

export const winchState: IWinchState = {
  winchDrivers: [],
  nearestDriver: undefined,
  origin: "",
  destination: "",
  travelTimeInformation: "",
  currentDriverIndex: 0,
  userType: "driver",
  driverDestination: "",
  driverOrigin: "",
  online: false,
  userOrigin: "",
  userDestination: "",
};
