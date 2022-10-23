import {isAntagonist} from "../antagonist";
import {isRoleRelated} from "../role-related";
import {Antagonistic} from "./antagonistic";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Antagonistic}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isAntagonistic = (value: unknown): value is Antagonistic => {
  return isRoleRelated(value) && isAntagonist(value.role);
};
