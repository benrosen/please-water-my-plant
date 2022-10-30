import { ANTAGONIST } from "antagonist";
import { CONNECT } from "connect";
import { ConnectOrder } from "connect-order";
import { getConnectOrders } from "get-connect-orders";
import { handleConnectOrder } from "handle-connect-order";
import { createUuid } from "uuid";
import { handleConnectOrders } from "./handle-connect-orders";

jest.mock("get-connect-orders");

const mockGetConnectOrders = jest.mocked(getConnectOrders);

jest.mock("handle-connect-order");

const mockHandleConnectOrder = jest.mocked(handleConnectOrder);

describe("The handleConnectOrders function", () => {
  describe("should invoke handleConnectOrder", () => {
    test("once for each ConnectOrder", () => {
      const mockConnectOrders: ConnectOrder[] = [
        {
          id: createUuid(),
          entityId: createUuid(),
          timestamp: Date.now(),
          name: CONNECT,
          role: ANTAGONIST,
        },
      ];

      mockGetConnectOrders.mockImplementationOnce(() => {
        return mockConnectOrders;
      });

      handleConnectOrders({
        componentIndex: {
          byComponentId: {},
          byEntityId: {},
        },
      });

      expect(mockHandleConnectOrder).toHaveBeenCalledTimes(
        mockConnectOrders.length
      );
    });
  });
});
