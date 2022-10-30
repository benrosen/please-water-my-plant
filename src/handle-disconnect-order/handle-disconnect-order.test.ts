import { DISCONNECT } from "disconnect";
import { removeComponentsByEntityId } from "remove-components-by-entity-id";
import { createUuid } from "uuid";
import { handleDisconnectOrder } from "./handle-disconnect-order";

jest.mock("remove-components-by-entity-id");

const mockRemoveComponentsByEntityId = jest.mocked(removeComponentsByEntityId);

describe("The handleDisconnectOrder function", () => {
  describe("should invoke removeComponentsByEntityId", () => {
    test("with the provided entity id", () => {
      const mockEntityId = createUuid();

      handleDisconnectOrder({
        componentIndex: {
          byComponentId: {},
          byEntityId: {},
          custom: {},
        },
        order: {
          id: createUuid(),
          entityId: mockEntityId,
          timestamp: Date.now(),
          name: DISCONNECT,
        },
      });

      expect(mockRemoveComponentsByEntityId).toHaveBeenCalledWith(
        expect.objectContaining({
          entityId: mockEntityId,
        })
      );
    });
  });
});
