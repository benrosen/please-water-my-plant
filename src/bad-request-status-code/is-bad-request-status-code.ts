import {BAD_REQUEST_STATUS_CODE, BadRequestStatusCode,} from "bad-request-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link BadRequestStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isBadRequestStatusCode = (
  value: unknown
): value is BadRequestStatusCode => {
  return typeof value === "number" && value === BAD_REQUEST_STATUS_CODE;
};
