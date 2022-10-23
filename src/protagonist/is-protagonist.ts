import {PROTAGONIST, Protagonist} from "./protagonist";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Protagonist}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isProtagonist = (value: unknown): value is Protagonist => {
  return typeof value === "string" && value === PROTAGONIST;
};
