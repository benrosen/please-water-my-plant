import { handlePointerDownEvent } from "handle-pointer-down-event";
import { IdentifiedByUuid } from "identified-by-uuid";
import { postPingOrder } from "post-ping-order";
import EventEmitter = Phaser.Events.EventEmitter;
import Pointer = Phaser.Input.Pointer;

/**
 * Post a {@link PingOrder} to the {@link OrderResourcePath} in response to a pointer down input event
 * @param params The config options
 * @param params.id The id of the client
 * @param params.input The {@link EventEmitter} that emits pointer down input events
 */
export const postPingOrderOnPointerDown = ({
  id,
  input,
}: IdentifiedByUuid & {
  input: EventEmitter;
}) => {
  handlePointerDownEvent({
    onPointerDown: (pointer: Pointer) => {
      return postPingOrder({
        id,
        position: pointer.position,
      });
    },
    input,
  });
};
