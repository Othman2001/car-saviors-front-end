import { User } from "firebase/auth";

export interface IUserData extends User {}

export interface IState {
  user: IUserData | null;
  loading: boolean;
  error: string;
  currentUserRole: string;
  visitedWorkShops: number;
  rentedCar: number;
  rentingCar: number;
}
export const state: IState = {
  user: null,
  loading: false,
  error: "",
  currentUserRole: "",
  visitedWorkShops: 0,
  rentedCar: 0,
  rentingCar: 0,
};
