import {isInternalServerErrorStatusCode} from "internal-server-error-status-code";
import {ServerErrorStatusCode} from "server-error-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ServerErrorStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isServerErrorStatusCode = (
  value: unknown
): value is ServerErrorStatusCode => {
  return isInternalServerErrorStatusCode(value);
};
