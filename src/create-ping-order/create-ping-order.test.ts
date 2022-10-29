import { PING } from "ping";
import { createPingOrder } from "./create-ping-order";

describe("The createPingOrder function", () => {
  test.each([
    [
      {
        entityId: "409e5725-8cfb-4238-b52f-119317a1747f",
        position: { x: 0, y: 0 },
      },
      {
        id: expect.anything(),
        position: { x: 0, y: 0 },
        entityId: "409e5725-8cfb-4238-b52f-119317a1747f",
        name: PING,
        timestamp: expect.anything(),
      },
    ],
  ] as [Parameters<typeof createPingOrder>[0], ReturnType<typeof createPingOrder>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createPingOrder(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
