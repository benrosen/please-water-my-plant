import { createPingEntity } from "create-ping-entity";
import { PING } from "ping";
import { createUuid } from "uuid";
import { handlePingOrder } from "./handle-ping-order";

jest.mock("create-ping-entity");

const mockCreatePingEntity = jest.mocked(createPingEntity);

describe("The handlePingOrder function", () => {
  test("should call the create ping entity function", () => {
    handlePingOrder({
      componentIndex: {
        byComponentId: {},
        byEntityId: {},
      },
      order: {
        id: createUuid(),
        entityId: createUuid(),
        timestamp: 0,
        position: {
          x: 0,
          y: 0,
        },
        name: PING,
      },
    });

    expect(mockCreatePingEntity).toHaveBeenCalled();
  });
});
