import { DISCONNECT } from "../disconnect";
import { getDisconnectOrders } from "./get-disconnect-orders";

describe("The getDisconnectOrders function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            "1EC36527-9F33-415D-A375-2288D6F5DBC0": {
              entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
              id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
              name: DISCONNECT,
              timestamp: 0,
            },
          },
          byEntityId: {
            "08D73E55-F54E-49D6-AD3D-17511A203519": [
              "1EC36527-9F33-415D-A375-2288D6F5DBC0",
            ],
          },
          custom: {
            isDisconnectOrder: ["1EC36527-9F33-415D-A375-2288D6F5DBC0"],
          },
        },
      },
      [
        {
          entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
          id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
          name: DISCONNECT,
          timestamp: 0,
        },
      ],
    ],
  ] as [Parameters<typeof getDisconnectOrders>[0], ReturnType<typeof getDisconnectOrders>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getDisconnectOrders(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
