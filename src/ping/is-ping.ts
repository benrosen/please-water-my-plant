import {PING, Ping} from "./ping";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Ping}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPing = (value: unknown): value is Ping => {
  return typeof value === "string" && value === PING;
};
