import {Name} from "name";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Name}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isName = (value: unknown): value is Name => {
  return typeof value === "string";
};
