import { isOrder } from "order";
import { createUuid } from "uuid";
import { createOrder } from "./create-order";

describe("The createOrder function", () => {
  describe("should return an object", () => {
    describe("that", () => {
      it("should be an order", () => {
        const mockEntityId = createUuid();

        const result = createOrder({
          entityId: mockEntityId,
        });

        expect(isOrder(result)).toStrictEqual(true);
      });

      it("should contain the provided entity id", () => {
        const mockEntityId = createUuid();

        const result = createOrder({
          entityId: mockEntityId,
        });

        expect(result).toStrictEqual(
          expect.objectContaining({
            entityId: mockEntityId,
          })
        );
      });
    });
  });
});
