import { DISCONNECT } from "disconnect";
import { DisconnectOrder } from "disconnect-order";
import { getDisconnectOrders } from "get-disconnect-orders";
import { handleDisconnectOrder } from "handle-disconnect-order";
import { createUuid } from "uuid";
import { handleDisconnectOrders } from "./handle-disconnect-orders";

jest.mock("get-disconnect-orders");

const mockGetDisconnectOrders = jest.mocked(getDisconnectOrders);

jest.mock("handle-disconnect-order");

const mockHandleDisconnectOrder = jest.mocked(handleDisconnectOrder);

describe("The handleDisconnectOrders function", () => {
  describe("should invoke handleDisconnectOrder", () => {
    test("once for each DisconnectOrder", () => {
      const mockDisconnectOrders: DisconnectOrder[] = [
        {
          id: createUuid(),
          entityId: createUuid(),
          timestamp: Date.now(),
          name: DISCONNECT,
        },
      ];

      mockGetDisconnectOrders.mockImplementationOnce(() => {
        return mockDisconnectOrders;
      });

      handleDisconnectOrders({
        componentIndex: {
          byComponentId: {},
          byEntityId: {},
        },
      });

      expect(mockHandleDisconnectOrder).toHaveBeenCalledTimes(
        mockDisconnectOrders.length
      );
    });
  });
});
