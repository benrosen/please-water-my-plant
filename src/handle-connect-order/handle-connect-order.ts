import {isAntagonist} from "antagonist";
import {ComponentIndex} from "component-index";
import {ConnectOrder} from "connect-order";
import {createAntagonistEntity} from "create-antagonist-entity";
import {createProtagonistEntity} from "create-protagonist-entity";
import {isProtagonist} from "protagonist";
import {removeComponent} from "remove-component";

/**
 * Handle a {@link ConnectOrder}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link ConnectOrder}
 * @param params.order The {@link ConnectOrder} to handle
 */
export const handleConnectOrder = ({
  componentIndex,
  order,
}: {
  componentIndex: ComponentIndex;
  order: ConnectOrder;
}) => {
  componentIndex = removeComponent({
    componentId: order.id,
    componentIndex,
  });

  if (isAntagonist(order.role)) {
    return createAntagonistEntity({
      componentIndex,
      entityId: order.entityId,
    });
  }

  if (isProtagonist(order.role)) {
    return createProtagonistEntity({
      componentIndex,
      entityId: order.entityId,
    });
  }

  throw new Error();
};
