import {Acceleration} from "acceleration";
import {isVector} from "vector";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Acceleration}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isAcceleration = (value: unknown): value is Acceleration => {
  return isVector(value);
};
