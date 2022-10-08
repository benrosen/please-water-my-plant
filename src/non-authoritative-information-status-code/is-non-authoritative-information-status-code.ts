import {
  NON_AUTHORITATIVE_INFORMATION_STATUS_CODE,
  NonAuthoritativeInformationStatusCode,
} from "non-authoritative-information-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link NonAuthoritativeInformationStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isNonAuthoritativeInformationStatusCode = (
  value: unknown
): value is NonAuthoritativeInformationStatusCode => {
  return (
    typeof value === "number" &&
    value === NON_AUTHORITATIVE_INFORMATION_STATUS_CODE
  );
};
