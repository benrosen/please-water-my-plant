import {CREATED_STATUS_CODE, CreatedStatusCode} from "./created-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link CreatedStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isCreatedStatusCode = (
  value: unknown
): value is CreatedStatusCode => {
  return typeof value === "number" && value === CREATED_STATUS_CODE;
};
