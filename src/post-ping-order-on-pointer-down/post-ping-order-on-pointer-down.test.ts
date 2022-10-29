/** @jest-environment jsdom */

import { handlePointerDownEvent } from "handle-pointer-down-event";
import { createUuid } from "uuid";
import { postPingOrderOnPointerDown } from "./post-ping-order-on-pointer-down";
import EventEmitter = Phaser.Events.EventEmitter;

jest.mock("handle-pointer-down-event", () => {
  return {
    ...jest.requireActual("handle-pointer-down-event"),
    handlePointerDownEvent: jest.fn(),
  };
});

const mockHandlePointerDownEvent = jest.mocked(handlePointerDownEvent);

describe("The postPingOrderOnPointerDown function", () => {
  describe("should invoke the handle pointer down event function", () => {
    test("with the provided input", () => {
      const mockInput = new EventEmitter();

      postPingOrderOnPointerDown({
        id: createUuid(),
        input: mockInput,
      });

      expect(mockHandlePointerDownEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          input: mockInput,
        })
      );
    });
  });
});
