import {StartsWith} from "./starts-with";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link StartsWith}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 * @param substring A string that appears at the beginning of the given value
 */
export const isStartsWith = <GenericStringType extends string>(
  value: unknown,
  substring: GenericStringType
): value is StartsWith<GenericStringType> => {
  return typeof value === "string" && value.startsWith(substring);
};
