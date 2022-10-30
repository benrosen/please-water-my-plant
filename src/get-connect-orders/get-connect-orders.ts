import {ComponentIndex} from "component-index";
import {ConnectOrder, isConnectOrder} from "connect-order";
import {getComponentsByCustomIndex} from "get-components-by-custom-index";

/**
 * Retrieve an array of {@link ConnectOrder} instances.
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link ConnectOrder} instances.
 */
export const getConnectOrders = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex<ConnectOrder>;
}) => {
  return getComponentsByCustomIndex<ConnectOrder>({
    componentIndex,
    indexName: isConnectOrder.name,
  });
};
