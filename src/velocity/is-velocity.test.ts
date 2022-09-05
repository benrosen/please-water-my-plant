import { isVelocity } from "./is-velocity";

const validExamples = [{ x: 0, y: 0 }];

const invalidExamples = [{ entity: "foo" }, { id: "bar" }];

describe("The isVelocity type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Velocity interface",
      (validExample) => {
        const result = isVelocity(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Velocity interface",
      (invalidExample) => {
        const result = isVelocity(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
