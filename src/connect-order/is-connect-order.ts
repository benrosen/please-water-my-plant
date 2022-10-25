import {isNamedConnect} from "named-connect";
import {isOrder} from "order";
import {isRoleRelated} from "role-related";
import {ConnectOrder} from "./connect-order";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ConnectOrder}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isConnectOrder = (value: unknown): value is ConnectOrder => {
  return isOrder(value) && isNamedConnect(value) && isRoleRelated(value);
};
