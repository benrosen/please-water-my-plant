import {PROCESSING_STATUS_CODE, ProcessingStatusCode,} from "processing-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ProcessingStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isProcessingStatusCode = (
  value: unknown
): value is ProcessingStatusCode => {
  return typeof value === "number" && value === PROCESSING_STATUS_CODE;
};
