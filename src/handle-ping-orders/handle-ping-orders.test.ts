import { getPingOrders } from "get-ping-orders";
import { handlePingOrder } from "handle-ping-order";
import { PING } from "ping";
import { PingOrder } from "ping-order";
import { createUuid } from "uuid";
import { handlePingOrders } from "./handle-ping-orders";

jest.mock("get-ping-orders");

const mockGetPingOrders = jest.mocked(getPingOrders);

jest.mock("handle-ping-order");

const mockHandlePingOrder = jest.mocked(handlePingOrder);

describe("The handlePingOrders function", () => {
  describe("should invoke handlePingOrder", () => {
    test("once for each PingOrder", () => {
      const mockPingOrders: PingOrder[] = [
        {
          id: createUuid(),
          entityId: createUuid(),
          timestamp: Date.now(),
          name: PING,
          position: {
            x: 0,
            y: 0,
          },
        },
      ];

      mockGetPingOrders.mockImplementationOnce(() => {
        return mockPingOrders;
      });

      handlePingOrders({
        componentIndex: {
          byComponentId: {},
          byEntityId: {},
        },
      });

      expect(mockHandlePingOrder).toHaveBeenCalledTimes(mockPingOrders.length);
    });
  });
});
