import { removeComponent } from "./remove-component";

describe("The removeComponent function", () => {
  test.each([
    [
      {
        componentId: "78684658-14b5-4b91-a823-2b828c962810",
        componentIndex: {
          byComponentId: {
            ["78684658-14b5-4b91-a823-2b828c962810"]: {
              id: "78684658-14b5-4b91-a823-2b828c962810",
              entityId: "96ff34eb-7462-467d-8234-75923cebac41",
            },
          },
          byEntityId: {
            ["96ff34eb-7462-467d-8234-75923cebac41"]: [
              "78684658-14b5-4b91-a823-2b828c962810",
            ],
          },
        },
      },
      {
        byComponentId: {},
        byEntityId: {},
        custom: {},
      },
    ],
  ] as [Parameters<typeof removeComponent>[0], ReturnType<typeof removeComponent>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = removeComponent(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
