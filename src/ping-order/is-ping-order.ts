import {isNamedPing} from "named-ping";
import {isOrder} from "order";
import {isPositioned} from "positioned";
import {PingOrder} from "./ping-order";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link PingOrder}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isPingOrder = (value: unknown): value is PingOrder => {
  return isNamedPing(value) && isOrder(value) && isPositioned(value);
};
