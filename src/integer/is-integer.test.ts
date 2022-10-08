import { isInteger } from "integer";

const validExamples = [-1, 0, 234];

const invalidExamples = [-0.1, 0.234, 1.56];

describe("The isInteger type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Integer interface",
      (validExample) => {
        const result = isInteger(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Integer interface",
      (invalidExample) => {
        const result = isInteger(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
