import {Timestamp} from "timestamp";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Timestamp}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isTimestamp = (value: unknown): value is Timestamp => {
  return typeof value === "number";
};
