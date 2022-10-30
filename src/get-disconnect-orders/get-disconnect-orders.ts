import {ComponentIndex} from "component-index";
import {DisconnectOrder, isDisconnectOrder} from "disconnect-order";
import {getComponentsByCustomIndex} from "get-components-by-custom-index";

/**
 * Retrieve an array of {@link DisconnectOrder} instances.
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link DisconnectOrder} instances.
 */
export const getDisconnectOrders = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex<DisconnectOrder>;
}) => {
  return getComponentsByCustomIndex<DisconnectOrder>({
    componentIndex,
    indexName: isDisconnectOrder.name,
  });
};
