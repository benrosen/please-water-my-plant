import {DISCONNECT} from "../disconnect";
import {isNamed} from "../named";
import {NamedDisconnect} from "./named-disconnect";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link NamedDisconnect}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isNamedDisconnect = (value: unknown): value is NamedDisconnect => {
  return isNamed(value) && value.name === DISCONNECT;
};
