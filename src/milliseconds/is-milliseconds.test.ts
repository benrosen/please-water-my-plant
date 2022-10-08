import { isMilliseconds } from "milliseconds";

const validExamples = [0, 1, 12];

const invalidExamples = [false, "hello"];

describe("The isMilliseconds type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Milliseconds interface",
      (validExample) => {
        const result = isMilliseconds(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Milliseconds interface",
      (invalidExample) => {
        const result = isMilliseconds(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
