import {isPastTimestamp} from "past-timestamp";
import {isPerishable} from "perishable";
import {Expired} from "./expired";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Expired}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isExpired = (value: unknown): value is Expired => {
  return isPerishable(value) && isPastTimestamp(value.expiresAt);
};
