import {PositiveNumber} from "positive-number";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link PositiveNumber}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPositiveNumber = (value: unknown): value is PositiveNumber => {
  return typeof value === "number" && value > 0;
};
