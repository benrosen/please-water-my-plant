import {isPosition} from "position";
import {Positioned} from "./positioned";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Positioned}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPositioned = (value: unknown): value is Positioned => {
  return isPosition(value["position"]);
};
