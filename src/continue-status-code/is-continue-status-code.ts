import {CONTINUE_STATUS_CODE, ContinueStatusCode} from "continue-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ContinueStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isContinueStatusCode = (
  value: unknown
): value is ContinueStatusCode => {
  return typeof value === "number" && value === CONTINUE_STATUS_CODE;
};
