import { isComponent } from "component";

const validExamples = [
  {
    entityId: "9537904F-E481-4346-AA6F-C7AC094BE01C",
    id: "6B0164E7-C6E1-4B23-82E9-1894808BE1EE",
  },
];

const invalidExamples = [{ id: 0 }, { entity: { id: "foo" } }];

describe("The isComponent type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Component interface",
      (validValue) => {
        const result = isComponent(validValue);
        expect(result).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Component interface",
      (invalidValue) => {
        const result = isComponent(invalidValue);
        expect(result).toStrictEqual(false);
      }
    );
  });
});
