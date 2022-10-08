import {isColor} from "color";
import {Colored} from "colored";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Colored}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isColored = (value: unknown): value is Colored => {
  return isColor(value["color"]);
};
