import { IContext, createOvermind } from "overmind";
import { namespaced } from "overmind/config";

import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
} from "overmind-react";

import { state } from "../application/authentication/state";
import * as authenticationEffects from "../infstracture/authentication/effects";
import * as authenticationActions from "../application/authentication/action";
import { rentalState } from "../application/rental/state";
import * as rentalActions from "../application/rental/action";
import * as rentalEffects from "../infstracture/rental/effects";
import { FontsState } from "../application/theme/sate";
import * as WorkshopState from "../application/workshops/state";
import * as ThemeActions from "../application/theme/actions";
import * as workshopsEffects from "../infstracture/workshops/effects";
import * as workshopsActions from "../application/workshops/action";
import { winchState } from "../application/winch/state";
import * as winchEffects from "../infstracture/winch/effects";
import * as winchActions from "../application/winch/action";

const authentication = {
  state,
  effects: authenticationEffects,
  actions: authenticationActions,
};
const rental = {
  state: rentalState,
  actions: rentalActions,
  effects: rentalEffects,
};
const theme = {
  state: FontsState,
  actions: ThemeActions,
};
const workshops = {
  state: WorkshopState,
  actions: workshopsActions,
  effects: workshopsEffects,
};
const winch = {
  state: winchState,
  actions: winchActions,
  effects: winchEffects,
};

export const config = namespaced({
  authentication,
  rental,
  theme,
  workshops,
  winch,
});

export type Context = IContext<typeof config>;

export type Action<Input = void, Output = void> = (
  contect: Context,
  input: Input
) => Output;

export type AsyncAction<Input = void, Output = void> = (
  contect: Context,
  input: Input
) => Promise<Output>;
export type Initialize<Input = void> = (contect: Context, input: Input) => void;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const overmind = createOvermind(config, {
  devtools: "localhost:3031",
});
