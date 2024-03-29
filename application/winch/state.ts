import { RequestSchema, WinchDriverSchema } from "./types";

interface IWinchState {
  winchDrivers: WinchDriverSchema[] | [];
  nearestDriver: WinchDriverSchema | undefined;
  origin: any;
  destination: any;
  travelTimeInformation: any | null;
  currentDriverIndex: number;
  userType: string;
  driverOrigin: any;
  driverDestination: any;
  online: boolean;
  userOrigin: any;
  userDestination: any;
  price: number;
  currentWinchDriverId: string;
  request: RequestSchema | null;
  requestState: boolean;
  tripFinished: boolean;
  isRejected: boolean;
  stayAtHome: boolean;
  noOtherDrivers: boolean;
}

export const winchState: IWinchState = {
  winchDrivers: [],
  nearestDriver: undefined,
  origin: "",
  destination: "",
  travelTimeInformation: null,
  noOtherDrivers: false,
  currentDriverIndex: 0,
  userType: "user",
  driverDestination: "",
  driverOrigin: "",
  online: false,
  userOrigin: "",
  userDestination: "",
  price: 0,
  currentWinchDriverId: "fake",
  request: null,
  requestState: true,
  tripFinished: false,
  isRejected: false,
  stayAtHome: false,
};
