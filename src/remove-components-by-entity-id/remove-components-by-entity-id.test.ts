import { removeComponentsByEntityId } from "./remove-components-by-entity-id";

describe("The removeComponentsByEntityId function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            ["7d1e8ee0-3310-44db-9c8c-9a9556a30bca"]: {
              id: "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
              entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
            },
          },
          byEntityId: {
            ["2c2a0e29-98c5-43b1-a452-91eca64a8ba8"]: [
              "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
            ],
          },
          custom: {},
        },
        entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
      },
      {
        byEntityId: {},
        byComponentId: {},
        custom: {},
      },
    ],
  ] as [Parameters<typeof removeComponentsByEntityId>[0], ReturnType<typeof removeComponentsByEntityId>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = removeComponentsByEntityId(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
