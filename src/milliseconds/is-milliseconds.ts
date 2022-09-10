import {Milliseconds} from "./milliseconds";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Milliseconds}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isMilliseconds = (value: unknown): value is Milliseconds => {
  return typeof value === "number";
};
