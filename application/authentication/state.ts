import { User } from "firebase/auth";

export interface IUserData extends User {}

export interface IState {
  user: IUserData | null;
  loading: boolean;
  currentUserRole: string;
  signUpError: string;
  logInError: string;
  error: string;
  loginLoading: boolean;
  phoneNumber: string | null;
}
export const state: IState = {
  user: null,
  loading: false,
  error: "",
  currentUserRole: "",
  signUpError: "",
  logInError: "",
  loginLoading: false,
  phoneNumber: null,
};
