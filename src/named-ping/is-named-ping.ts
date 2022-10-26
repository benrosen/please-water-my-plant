import {isNamed} from "named";
import {PING} from "ping";
import {NamedPing} from "./named-ping";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link NamedPing}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isNamedPing = (value: unknown): value is NamedPing => {
  return isNamed(value) && value.name === PING;
};
