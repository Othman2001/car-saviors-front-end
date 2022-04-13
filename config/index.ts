import { IContext, createOvermind } from "overmind";
import { namespaced } from "overmind/config";
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
} from "overmind-react";

import { state } from "../application/state";

const authentication = { state };

export const config = namespaced({
  authentication,
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
