import {ComponentIndex} from "component-index";
import {handleConnectOrders} from "handle-connect-orders";
import {handleDisconnectOrders} from "handle-disconnect-orders";
import {handlePingOrders} from "handle-ping-orders";

/**
 * Return an array of functions that can handle {@link Order} instances
 */
export const getOrderHandlers = (): (({
  componentIndex: ComponentIndex,
}) => ComponentIndex)[] => {
  return [handleConnectOrders, handleDisconnectOrders, handlePingOrders];
};
