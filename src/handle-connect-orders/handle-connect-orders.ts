import {ComponentIndex} from "component-index";
import {getConnectOrders} from "get-connect-orders";
import {handleConnectOrder} from "handle-connect-order";
import {ConnectOrder} from "../connect-order";

/**
 * Handle every {@link ConnectOrder} in the given {@link ComponentIndex}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link ConnectOrder}
 */
export const handleConnectOrders = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex<ConnectOrder>;
}) => {
  const connectOrders = getConnectOrders({ componentIndex });

  return connectOrders.reduce<ComponentIndex>(
    (reducedComponentIndex, connectOrder) => {
      return handleConnectOrder({
        componentIndex: reducedComponentIndex,
        order: connectOrder,
      });
    },
    componentIndex
  );
};
