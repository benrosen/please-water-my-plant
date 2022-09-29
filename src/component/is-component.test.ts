import { isComponent } from "./is-component";

const validExamples = [{ entityId: "foo", id: "foo" }];

const invalidExamples = [{ id: 0 }, { entity: { id: "foo" } }];

describe("The isComponent type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Component interface",
      (validValue) => {
        const result = isComponent(validValue);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Component interface",
      (invalidValue) => {
        const result = isComponent(invalidValue);
        expect(result).toBeFalsy();
      }
    );
  });
});
