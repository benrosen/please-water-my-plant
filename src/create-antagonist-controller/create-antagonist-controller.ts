import { IdentifiedByUuid } from "identified-by-uuid";
import { Order } from "order";
import { postPingOrderOnPointerDown } from "post-ping-order-on-pointer-down";
import EventEmitter = Phaser.Events.EventEmitter;

/**
 * Invoke a callback function each time the antagonist creates a new {@link Order}
 * @param params The config options
 * @param params.id A {@link Uuid} that identifies this antagonist controller
 * @param params.input The {@link EventEmitter} that emits pointer down input events
 */
export const createAntagonistController = ({
  id,
  input,
}: IdentifiedByUuid & {
  input: EventEmitter;
}) => {
  postPingOrderOnPointerDown({
    id,
    input,
  });
};
