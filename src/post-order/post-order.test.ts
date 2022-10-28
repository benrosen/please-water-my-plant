/** @jest-environment jsdom */

import resetAllMocks = jest.resetAllMocks;
import { createPingOrder } from "create-ping-order";
import { OrderResourcePath } from "order-resource-path";
import { createUuid } from "uuid";
import { postOrder } from "./post-order";

const defaultFetch: typeof fetch = window.fetch;

const mockFetch = jest.fn();

window.fetch = mockFetch;

beforeEach(() => {
  resetAllMocks();
});

afterAll(() => {
  window.fetch = defaultFetch;
});

describe("The postOrder function", () => {
  describe("should invoke the fetch function", () => {
    test("with the order resource path", () => {
      const mockPingOrder = createPingOrder({
        entityId: createUuid(),
        position: {
          x: 0,
          y: 0,
        },
      });

      postOrder({ order: mockPingOrder });

      expect(mockFetch).toHaveBeenCalledWith(
        OrderResourcePath,
        expect.anything()
      );
    });

    test("with a stringified version of the given order", () => {
      const mockPingOrder = createPingOrder({
        entityId: createUuid(),
        position: {
          x: 0,
          y: 0,
        },
      });

      postOrder({ order: mockPingOrder });

      expect(mockFetch).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          body: JSON.stringify(mockPingOrder),
        })
      );
    });
  });
});
