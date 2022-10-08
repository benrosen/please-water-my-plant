import {NO_CONTENT_STATUS_CODE, NoContentStatusCode,} from "no-content-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link NoContentStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isNoContentStatusCode = (
  value: unknown
): value is NoContentStatusCode => {
  return typeof value === "number" && value === NO_CONTENT_STATUS_CODE;
};
