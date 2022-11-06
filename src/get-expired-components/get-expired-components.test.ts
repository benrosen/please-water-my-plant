import { getExpiredComponents } from "./get-expired-components";

describe("The getExpiredComponents function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            "1EC36527-9F33-415D-A375-2288D6F5DBC0": {
              entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
              id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
              expiresAt: 0,
            },
          },
          byEntityId: {
            "08D73E55-F54E-49D6-AD3D-17511A203519": [
              "1EC36527-9F33-415D-A375-2288D6F5DBC0",
            ],
          },
          custom: {
            isExpired: ["1EC36527-9F33-415D-A375-2288D6F5DBC0"],
          },
        },
      },
      [
        {
          entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
          id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
          expiresAt: 0,
        },
      ],
    ],
  ] as [Parameters<typeof getExpiredComponents>[0], ReturnType<typeof getExpiredComponents>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getExpiredComponents(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
