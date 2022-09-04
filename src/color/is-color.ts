import {Color} from "./color";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Color}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isColor = (value: unknown): value is Color => {
  return typeof value === "string";
};
