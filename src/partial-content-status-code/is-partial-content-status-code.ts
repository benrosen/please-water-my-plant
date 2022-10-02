import {PARTIAL_CONTENT_STATUS_CODE, PartialContentStatusCode,} from "./partial-content-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link PartialContentStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPartialContentStatusCode = (
  value: unknown
): value is PartialContentStatusCode => {
  return typeof value === "number" && value === PARTIAL_CONTENT_STATUS_CODE;
};
