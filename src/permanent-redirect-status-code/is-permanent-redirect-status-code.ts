import {PERMANENT_REDIRECT_STATUS_CODE, PermanentRedirectStatusCode} from "./permanent-redirect-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link PermanentRedirectStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPermanentRedirectStatusCode = (
  value: unknown
): value is PermanentRedirectStatusCode => {
  return typeof value === "number" && value === PERMANENT_REDIRECT_STATUS_CODE;
};
