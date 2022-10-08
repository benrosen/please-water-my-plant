import {MOVED_PERMANENTLY_STATUS_CODE, MovedPermanentlyStatusCode,} from "moved-permanently-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link MovedPermanentlyStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isMovedPermanentlyStatusCode = (
  value: unknown
): value is MovedPermanentlyStatusCode => {
  return typeof value === "number" && value === MOVED_PERMANENTLY_STATUS_CODE;
};
