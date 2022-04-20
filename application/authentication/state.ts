import { User } from "firebase/auth";

export interface IUserData extends User {}

export interface IState {
  user: IUserData | null;
  loading: boolean;
  error: string;
  currentUserRole: string;
}
export const state: IState = {
  user: null,
  loading: false,
  error: "",
  currentUserRole: "",
};
