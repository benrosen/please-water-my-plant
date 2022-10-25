import {isNamedDisconnect} from "named-disconnect";
import {isOrder} from "order";
import {DisconnectOrder} from "./disconnect-order";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link DisconnectOrder}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isDisconnectOrder = (value: unknown): value is DisconnectOrder => {
  return isOrder(value) && isNamedDisconnect(value);
};
