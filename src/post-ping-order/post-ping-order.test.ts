import { postOrder } from "post-order";
import { createUuid } from "uuid";
import { postPingOrder } from "./post-ping-order";

jest.mock("../post-order", () => {
  return {
    ...jest.requireActual("../post-order"),
    postOrder: jest.fn(),
  };
});

const mockPostOrder = jest.mocked(postOrder);

describe("The postPingOrder function", () => {
  describe("should invoke the post order function", () => {
    test("with an object containing the provided id and position", () => {
      const mockPingOrderId = createUuid();

      postPingOrder({
        id: mockPingOrderId,
        position: { x: 0, y: 0 },
      });

      expect(mockPostOrder).toHaveBeenCalledWith({
        order: expect.objectContaining({
          entityId: mockPingOrderId,
        }),
      });
    });
  });
});
