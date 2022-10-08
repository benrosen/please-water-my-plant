import {UNAUTHORIZED_STATUS_CODE, UnauthorizedStatusCode,} from "unauthorized-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link UnauthorizedStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isUnauthorizedStatusCode = (
  value: unknown
): value is UnauthorizedStatusCode => {
  return typeof value === "number" && value === UNAUTHORIZED_STATUS_CODE;
};
