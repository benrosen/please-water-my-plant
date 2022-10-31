import {Component} from "component";
import {ComponentIndex} from "component-index";
import {handleOrders} from "handle-orders";

/**
 * Derive a {@link Component} array representing next state of the game from a {@link ComponentIndex} representing the current state of the game.
 * @param componentIndex The {@link ComponentIndex} representing the current state of the game.
 */
export const getNewComponents = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex;
}): Component[] => {
  componentIndex = handleOrders({ componentIndex });

  return Object.values(componentIndex.byComponentId);
};
