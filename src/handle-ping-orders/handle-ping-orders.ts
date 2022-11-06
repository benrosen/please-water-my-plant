import {ComponentIndex} from "component-index";
import {getPingOrders} from "get-ping-orders";
import {handlePingOrder} from "handle-ping-order";
import {PingOrder} from "ping-order";

/**
 * Handle every {@link PingOrder} in the given {@link ComponentIndex}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link PingOrder}
 */
export const handlePingOrders = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex<PingOrder>;
}) => {
  const pingOrders = getPingOrders({ componentIndex });

  return pingOrders.reduce<ComponentIndex>(
    (reducedComponentIndex, pingOrder) => {
      return handlePingOrder({
        componentIndex: reducedComponentIndex,
        order: pingOrder,
      });
    },
    componentIndex
  );
};
