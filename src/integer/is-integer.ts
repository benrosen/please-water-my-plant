import {Integer} from "integer";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Integer}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isInteger = (value: unknown): value is Integer => {
  return typeof value === "number" && Number.isInteger(value);
};
