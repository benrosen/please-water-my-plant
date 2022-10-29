import { IdentifiedByUuid } from "identified-by-uuid";
import { Order } from "order";
import { postPingOrderOnPointerDown } from "post-ping-order-on-pointer-down";
import InputPlugin = Phaser.Input.InputPlugin;

/**
 * Invoke a callback function each time the protagonist creates a new {@link Order}
 * @param params The config options
 * @param params.id A {@link Uuid} that identifies this protagonist controller
 * @param params.input The {@link EventEmitter} that emits pointer down input events
 */
export const createProtagonistController = ({
  id,
  input,
}: IdentifiedByUuid & {
  input: InputPlugin;
}) => {
  postPingOrderOnPointerDown({
    id,
    input,
  });
};
