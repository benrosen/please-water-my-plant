import {EndsWith} from "./ends-with";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link EndsWith}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 * @param substring A string that appears at the end of the given value
 */
export const isEndsWith = <GenericStringType extends string>(
  value: unknown,
  substring: GenericStringType
): value is EndsWith<GenericStringType> => {
  return typeof value === "string" && value.endsWith(substring);
};
