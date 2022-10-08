import {OK_STATUS_CODE, OkStatusCode} from "ok-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link OK_STATUS_CODE}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isOkStatusCode = (value: unknown): value is OkStatusCode => {
  return typeof value === "number" && value === OK_STATUS_CODE;
};
