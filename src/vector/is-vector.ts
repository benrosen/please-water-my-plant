import {Vector} from "./vector";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Vector}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isVector = (value: unknown): value is Vector => {
  return typeof value["x"] === "number" && typeof value["y"] === "number";
};
