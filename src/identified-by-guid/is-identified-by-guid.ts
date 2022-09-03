import {isGuid} from "../guid";
import {isIdentifiedBy} from "../identified-by";
import {IdentifiedByGuid} from "./identified-by-guid";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link IdentifiedByGuid}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isIdentifiedByGuid = (
  value: unknown
): value is IdentifiedByGuid => {
  return isIdentifiedBy(value) && isGuid(value.id);
};
