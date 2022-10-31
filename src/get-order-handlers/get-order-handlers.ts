import {handleConnectOrders} from "handle-connect-orders";
import {handleDisconnectOrders} from "handle-disconnect-orders";

/**
 * Return an array of functions that can handle {@link Order} instances
 */
export const getOrderHandlers = () => {
  return [handleConnectOrders, handleDisconnectOrders];
};
