import {handleConnectOrders} from "handle-connect-orders";
import {handleDisconnectOrders} from "handle-disconnect-orders";
import {ComponentIndex} from "../component-index";

/**
 * Return an array of functions that can handle {@link Order} instances
 */
export const getOrderHandlers = (): (({
  componentIndex: ComponentIndex,
}) => ComponentIndex)[] => {
  return [handleConnectOrders, handleDisconnectOrders];
};
