import {isVector} from "vector";
import {Velocity} from "velocity";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Velocity}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isVelocity = (value: unknown): value is Velocity => {
  return isVector(value);
};
