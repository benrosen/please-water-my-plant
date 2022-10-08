import {isIdentifiedBy} from "identified-by";
import {IdentifiedByUuid} from "identified-by-uuid";
import {isUuid} from "uuid";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link IdentifiedByUuid}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isIdentifiedByUuid = (
  value: unknown
): value is IdentifiedByUuid => {
  return isIdentifiedBy(value) && isUuid(value.id);
};
