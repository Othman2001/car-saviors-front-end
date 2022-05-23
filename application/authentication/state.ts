import { User } from "firebase/auth";

export interface IUserData extends User {}

export interface IState {
  user: IUserData | null;
  loading: boolean;
  currentUserRole: string;
  visitedWorkShops: number;
  rentedCar: number;
  rentingCar: number;
  signUpError: string;
  logInError: string;
  error: string;
  loginLoading: boolean;
}
export const state: IState = {
  user: null,
  loading: false,
  error: "",
  currentUserRole: "",
  visitedWorkShops: 0,
  rentedCar: 0,
  rentingCar: 0,
  signUpError: "",
  logInError: "",
  loginLoading: false,
};
