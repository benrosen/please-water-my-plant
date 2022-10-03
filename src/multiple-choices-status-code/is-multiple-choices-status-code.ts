import {MULTIPLE_CHOICE_STATUS_CODE, MultipleChoicesStatusCode,} from "./multiple-choices-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link MultipleChoicesStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isMultipleChoicesStatusCode = (
  value: unknown
): value is MultipleChoicesStatusCode => {
  return typeof value === "number" && value === MULTIPLE_CHOICE_STATUS_CODE;
};
