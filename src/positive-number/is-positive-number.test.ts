import { isPositiveNumber } from "./is-positive-number";

const validExamples = [1, 23.4, 98];

const invalidExamples = [-1, -4.5, 0];

describe("The isPositiveNumber type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the PositiveNumber interface",
      (validExample) => {
        const result = isPositiveNumber(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the PositiveNumber interface",
      (invalidExample) => {
        const result = isPositiveNumber(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
