import { IdentifiedByUuid } from "identified-by-uuid";
import { Order } from "order";
import { Scene } from "phaser";
import { createUuid } from "uuid";

35;

/**
 * Invoke a callback function each time the protagonist creates a new {@link Order}
 * @param params The config options
 * @param params.handleOnOrderCreated A callback function to invoke each time an {@link Order} is created
 * @param params.id A {@link Uuid} that identifies this protagonist controller
 * @param params.scene A {@link Scene} instance
 */
export const createProtagonistController = ({
  handleOnOrderCreated,
  id,
  scene,
}: IdentifiedByUuid & {
  handleOnOrderCreated: (order: Order) => void;
  scene: Scene;
}) => {
  scene.input.on(Phaser.Input.Events.POINTER_DOWN, () => {
    handleOnOrderCreated({
      id: createUuid(),
      entityId: id,
      timestamp: Date.now(),
    });
  });
};
