import {isTimestamp} from "../timestamp";
import {Timestamped} from "./timestamped";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Timestamped}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isTimestamped = (value: unknown): value is Timestamped => {
  return isTimestamp(value["timestamp"]);
};
