import {ComponentIndex} from "component-index";
import {getComponentsByCustomIndex} from "get-components-by-custom-index";
import {isPingOrder, PingOrder} from "ping-order";

/**
 * Retrieve an array of {@link PingOrder} instances
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link PingOrder} instances
 */
export const getPingOrders = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex<PingOrder>;
}) => {
  return getComponentsByCustomIndex<PingOrder>({
    componentIndex,
    indexName: isPingOrder.name,
  });
};
