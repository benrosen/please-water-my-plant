import {Component} from "component";
import {ComponentIndex} from "component-index";
import {handleOrders} from "handle-orders";
import {removeExpiredComponents} from "remove-expired-components";

/**
 * Derive a {@link Component} array representing next state of the game from a {@link ComponentIndex} representing the current state of the game.
 * @param componentIndex The {@link ComponentIndex} representing the current state of the game.
 */
export const getNewComponents = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex;
}): Component[] => {
  const componentIndexWithoutExpiredComponents = removeExpiredComponents({
    componentIndex,
  });

  const componentIndexAfterHandlingOrders = handleOrders({
    componentIndex: componentIndexWithoutExpiredComponents,
  });

  return Object.values(componentIndexAfterHandlingOrders.byComponentId);
};
