import {isAntagonist} from "antagonist";
import {isProtagonist} from "protagonist";
import {Role} from "./role";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Role}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isRole = (value: unknown): value is Role => {
  return isAntagonist(value) || isProtagonist(value);
};
