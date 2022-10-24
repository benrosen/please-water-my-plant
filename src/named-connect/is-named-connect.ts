import {CONNECT} from "connect";
import {isNamed} from "named";
import {NamedConnect} from "./named-connect";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link NamedConnect}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isNamedConnect = (value: unknown): value is NamedConnect => {
  return isNamed(value) && value.name === CONNECT;
};
