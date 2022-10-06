import {AffectedByGravity} from "./affected-by-gravity";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link AffectedByGravity}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isAffectedByGravity = (
  value: unknown
): value is AffectedByGravity => {
  return value && value["affectedByGravity"] === true;
};
