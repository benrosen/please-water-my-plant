import {ComponentIndex} from "component-index";
import {DisconnectOrder} from "disconnect-order";
import {removeComponent} from "remove-component";
import {removeComponentsByEntityId} from "remove-components-by-entity-id";

/**
 * Handle a {@link DisconnectOrder}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link DisconnectOrder}
 * @param params.order The {@link DisconnectOrder} to handle
 */
export const handleDisconnectOrder = ({
  componentIndex,
  order,
}: {
  componentIndex: ComponentIndex;
  order: DisconnectOrder;
}) => {
  componentIndex = removeComponent({
    componentId: order.id,
    componentIndex,
  });

  return removeComponentsByEntityId({
    componentIndex,
    entityId: order.entityId,
  });
};
