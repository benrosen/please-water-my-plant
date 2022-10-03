import {FORBIDDEN_STATUS_CODE, ForbiddenStatusCode,} from "./forbidden-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ForbiddenStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isForbiddenStatusCode = (
  value: unknown
): value is ForbiddenStatusCode => {
  return typeof value === "number" && value === FORBIDDEN_STATUS_CODE;
};
