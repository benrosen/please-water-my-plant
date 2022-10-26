import {isProtagonist} from "protagonist";
import {isRoleRelated} from "role-related";
import {Protagonistic} from "./protagonistic";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Protagonistic}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isProtagonistic = (value: unknown): value is Protagonistic => {
  return isRoleRelated(value) && isProtagonist(value.role);
};
