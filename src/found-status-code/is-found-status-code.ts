import {FOUND_STATUS_CODE, FoundStatusCode} from "found-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link FoundStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isFoundStatusCode = (value: unknown): value is FoundStatusCode => {
  return typeof value === "number" && value === FOUND_STATUS_CODE;
};
