import { isAcceleration } from "./is-acceleration";

const validExamples = [{ x: 0, y: 0 }];

const invalidExamples = [{ entity: "foo" }, { id: "bar" }];

describe("The isAcceleration type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Acceleration interface",
      (validExample) => {
        const result = isAcceleration(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Acceleration interface",
      (invalidExample) => {
        const result = isAcceleration(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
