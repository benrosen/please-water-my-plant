import {ACCEPTED_STATUS_CODE, AcceptedStatusCode} from "./accepted-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ACCEPTED_STATUS_CODE}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isAcceptedStatusCode = (
  value: unknown
): value is AcceptedStatusCode => {
  return typeof value === "number" && value === ACCEPTED_STATUS_CODE;
};
