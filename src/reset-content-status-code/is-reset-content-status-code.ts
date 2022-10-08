import {RESET_CONTENT_STATUS_CODE, ResetContentStatusCode,} from "reset-content-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ResetContentStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isResetContentStatusCode = (
  value: unknown
): value is ResetContentStatusCode => {
  return typeof value === "number" && value === RESET_CONTENT_STATUS_CODE;
};
