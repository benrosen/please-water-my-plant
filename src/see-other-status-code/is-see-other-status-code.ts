import {SEE_OTHER_STATUS_CODE, SeeOtherStatusCode} from "see-other-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link SeeOtherStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isSeeOtherStatusCode = (
  value: unknown
): value is SeeOtherStatusCode => {
  return typeof value === "number" && value === SEE_OTHER_STATUS_CODE;
};
