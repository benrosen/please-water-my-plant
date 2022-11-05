import {createTimestamp} from "create-timestamp";
import {isTimestamp} from "timestamp";
import {PastTimestamp} from "./past-timestamp";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link PastTimestamp}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPastTimestamp = (value: unknown): value is PastTimestamp => {
  const presentTimestamp = createTimestamp();

  return isTimestamp(value) && value < presentTimestamp;
};
