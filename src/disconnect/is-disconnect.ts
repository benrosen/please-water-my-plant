import {DISCONNECT, Disconnect} from "./disconnect";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Disconnect}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isDisconnect = (value: unknown): value is Disconnect => {
  return typeof value === "string" && value === DISCONNECT;
};
