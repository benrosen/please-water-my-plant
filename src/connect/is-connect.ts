import {CONNECT, Connect} from "./connect";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Connect}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isConnect = (value: unknown): value is Connect => {
  return typeof value === "string" && value === CONNECT;
};
