import {Position} from "position";
import {isVector} from "vector";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Position}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPosition = (value: unknown): value is Position => {
  return isVector(value);
};
