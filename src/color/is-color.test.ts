import { isColor } from "./is-color";

const validColors = ["blue"];

const invalidColors = [false];

describe("The isColor type-guard function", () => {
  describe("should return true", () => {
    test.each(validColors)(
      "when the given value, %j, is a VALID color",
      (validColor) => {
        const isValidColor = isColor(validColor);
        expect(isValidColor).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidColors)(
      "when the given value, %j, is an INVALID color",
      (invalidColor) => {
        const isValidColor = isColor(invalidColor);
        expect(isValidColor).toBeFalsy();
      }
    );
  });
});
