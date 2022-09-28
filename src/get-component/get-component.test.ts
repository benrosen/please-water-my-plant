import { getComponent } from "./get-component";

describe("The getComponent function", () => {
  test.each([
    [
      {
        componentId: "bar",
        componentIndex: {
          byComponentId: {
            bar: { entityId: "foo", id: "bar" },
          },
          byEntityId: { foo: ["bar"] },
        },
      },
      { entityId: "foo", id: "bar" },
    ],
  ] as [Parameters<typeof getComponent>[0], ReturnType<typeof getComponent>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getComponent(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
