import { ANTAGONIST } from "antagonist";
import { CONNECT } from "connect";
import { getConnectOrders } from "./get-connect-orders";

describe("The getConnectOrders function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            "1EC36527-9F33-415D-A375-2288D6F5DBC0": {
              entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
              id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
              name: CONNECT,
              timestamp: 0,
              role: ANTAGONIST,
            },
          },
          byEntityId: {
            "08D73E55-F54E-49D6-AD3D-17511A203519": [
              "1EC36527-9F33-415D-A375-2288D6F5DBC0",
            ],
          },
          custom: {
            isConnectOrder: ["1EC36527-9F33-415D-A375-2288D6F5DBC0"],
          },
        },
      },
      [
        {
          entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
          id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
          name: CONNECT,
          timestamp: 0,
          role: ANTAGONIST,
        },
      ],
    ],
  ] as [Parameters<typeof getConnectOrders>[0], ReturnType<typeof getConnectOrders>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getConnectOrders(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
