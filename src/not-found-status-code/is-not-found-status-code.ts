import {NOT_FOUND_STATUS_CODE, NotFoundStatusCode,} from "not-found-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link NotFoundStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isNotFoundStatusCode = (
  value: unknown
): value is NotFoundStatusCode => {
  return typeof value === "number" && value === NOT_FOUND_STATUS_CODE;
};
