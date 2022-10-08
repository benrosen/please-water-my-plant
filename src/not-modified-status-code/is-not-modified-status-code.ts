import {NOT_MODIFIED_STATUS_CODE, NotModifiedStatusCode,} from "not-modified-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link NotModifiedStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isNotModifiedStatusCode = (
  value: unknown
): value is NotModifiedStatusCode => {
  return typeof value === "number" && value === NOT_MODIFIED_STATUS_CODE;
};
