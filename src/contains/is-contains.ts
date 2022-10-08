import {Contains} from "contains";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Contains}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 * @param substring A string that appears in the given value
 */
export const isContains = <GenericStringType extends string>(
  value: unknown,
  substring: GenericStringType
): value is Contains<GenericStringType> => {
  return typeof value === "string" && value.includes(substring);
};
