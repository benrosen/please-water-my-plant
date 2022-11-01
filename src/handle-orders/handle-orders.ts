import {ComponentIndex} from "component-index";
import {getOrderHandlers} from "get-order-handlers";

/**
 * Handle an array of {@link Order} instances
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link Order} instances to handle
 */
export const handleOrders = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex;
}) => {
  const orderHandlers = getOrderHandlers();

  return orderHandlers.reduce<ComponentIndex>(
    (reducedComponentIndex, orderHandler) => {
      return orderHandler({
        componentIndex: reducedComponentIndex,
      });
    },
    componentIndex
  );
};
