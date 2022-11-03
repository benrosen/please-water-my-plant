import {ComponentIndex} from "component-index";
import {DisconnectOrder} from "disconnect-order";
import {getDisconnectOrders} from "get-disconnect-orders";
import {handleDisconnectOrder} from "handle-disconnect-order";

/**
 * Handle every {@link DisconnectOrder} in the given {@link ComponentIndex}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link DisconnectOrder}
 */
export const handleDisconnectOrders = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex<DisconnectOrder>;
}) => {
  const disconnectOrders = getDisconnectOrders({ componentIndex });

  return disconnectOrders.reduce<ComponentIndex>(
    (reducedComponentIndex, disconnectOrder) => {
      return handleDisconnectOrder({
        componentIndex: reducedComponentIndex,
        order: disconnectOrder,
      });
    },
    componentIndex
  );
};
