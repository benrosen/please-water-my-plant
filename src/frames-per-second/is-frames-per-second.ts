import {FramesPerSecond} from "./frames-per-second";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link FramesPerSecond}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isFramesPerSecond = (value: unknown): value is FramesPerSecond => {
  return typeof value === "number";
};