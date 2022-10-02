import {EARLY_HINTS_STATUS_CODE, EarlyHintsStatusCode,} from "./early-hints-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link EarlyHintsStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isEarlyHintsStatusCode = (
  value: unknown
): value is EarlyHintsStatusCode => {
  return typeof value === "number" && value === EARLY_HINTS_STATUS_CODE;
};
