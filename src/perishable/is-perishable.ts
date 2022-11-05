import {isTimestamp} from "timestamp";
import {Perishable} from "./perishable";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Perishable}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPerishable = (value: unknown): value is Perishable => {
  return isTimestamp(value["expiresAt"]);
};
