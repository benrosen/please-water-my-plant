/** @jest-environment jsdom */

import { Input } from "phaser";
import { handlePointerDownEvent } from "./handle-pointer-down-event";
import EventEmitter = Phaser.Events.EventEmitter;

describe("The handlePointerDownEvent function", () => {
  describe("should invoke the provided onPointerDown callback", () => {
    test("when the provided input object emits a pointer down event", (done) => {
      const mockInput = new EventEmitter();

      const mockOnPointerDown = () => {
        done();
      };

      handlePointerDownEvent({
        onPointerDown: mockOnPointerDown,
        input: mockInput,
      });

      mockInput.emit(Input.Events.POINTER_DOWN);
    });
  });
});
