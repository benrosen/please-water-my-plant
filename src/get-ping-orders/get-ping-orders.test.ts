import { PING } from "ping";
import { getPingOrders } from "./get-ping-orders";

describe("The getPingOrders function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            "1EC36527-9F33-415D-A375-2288D6F5DBC0": {
              entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
              id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
              name: PING,
              timestamp: 0,
              position: {
                x: 0,
                y: 0,
              },
            },
          },
          byEntityId: {
            "08D73E55-F54E-49D6-AD3D-17511A203519": [
              "1EC36527-9F33-415D-A375-2288D6F5DBC0",
            ],
          },
          custom: {
            isPingOrder: ["1EC36527-9F33-415D-A375-2288D6F5DBC0"],
          },
        },
      },
      [
        {
          entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
          id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
          name: PING,
          timestamp: 0,
          position: {
            x: 0,
            y: 0,
          },
        },
      ],
    ],
  ] as [Parameters<typeof getPingOrders>[0], ReturnType<typeof getPingOrders>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getPingOrders(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
