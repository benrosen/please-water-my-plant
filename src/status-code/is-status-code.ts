import {isInformationStatusCode} from "../information-status-code";
import {isSuccessfulStatusCode} from "../successful-status-code";
import {StatusCode} from "./status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link StatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isStatusCode = (value: unknown): value is StatusCode => {
  return isInformationStatusCode(value) || isSuccessfulStatusCode(value);
};
