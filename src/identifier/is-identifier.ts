import {Identifier} from "identifier";
import {isUuid} from "uuid";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Identifier}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isIdentifier = (value: unknown): value is Identifier => {
  return isUuid(value);
};
