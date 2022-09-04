import {isVector} from "../vector";
import {Acceleration} from "./acceleration";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Acceleration}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isAcceleration = (value: unknown): value is Acceleration => {
  return isVector(value);
};
