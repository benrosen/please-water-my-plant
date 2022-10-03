import {TEMPORARY_REDIRECT_STATUS_CODE, TemporaryRedirectStatusCode} from "./temporary-redirect-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link TemporaryRedirectStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isTemporaryRedirectStatusCode = (
  value: unknown
): value is TemporaryRedirectStatusCode => {
  return typeof value === "number" && value === TEMPORARY_REDIRECT_STATUS_CODE;
};
