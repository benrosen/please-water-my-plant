import {INTERNAL_SERVER_ERROR_STATUS_CODE, InternalServerErrorStatusCode} from "./internal-server-error-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link INTERNAL_SERVER_ERROR_STATUS_CODE}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isInternalServerErrorStatusCode = (
  value: unknown
): value is InternalServerErrorStatusCode => {
  return (
    typeof value === "number" && value === INTERNAL_SERVER_ERROR_STATUS_CODE
  );
};
