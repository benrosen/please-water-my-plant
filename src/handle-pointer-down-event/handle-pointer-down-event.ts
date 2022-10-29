import EventEmitter = Phaser.Events.EventEmitter;
import Pointer = Phaser.Input.Pointer;
import { Input } from "phaser";

/**
 * Invoke the provided callback function when the provided input object emits a pointer down event.
 * @param params The config options
 * @param params.onPointerDown The callback function to invoke when the provided input object emits a pointer down event
 * @param params.input The object that emits pointer down events
 */
export const handlePointerDownEvent = ({
  onPointerDown,
  input,
}: {
  onPointerDown: (pointer: Pointer) => void;
  input: EventEmitter;
}) => {
  input.on(Input.Events.POINTER_DOWN, (pointer: Pointer) => {
    onPointerDown(pointer);
  });
};
