import {isBadRequestStatusCode} from "../bad-request-status-code";
import {isForbiddenStatusCode} from "../forbidden-status-code";
import {isNotFoundStatusCode} from "../not-found-status-code";
import {isUnauthorizedStatusCode} from "../unauthorized-status-code";
import {ClientErrorStatusCode} from "./client-error-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ClientErrorStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isClientErrorStatusCode = (
  value: unknown
): value is ClientErrorStatusCode => {
  return (
    isBadRequestStatusCode(value) ||
    isUnauthorizedStatusCode(value) ||
    isForbiddenStatusCode(value) ||
    isNotFoundStatusCode(value)
  );
};
