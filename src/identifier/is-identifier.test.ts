import { isIdentifier } from "./is-identifier";

const validExamples = ["C63B397E-AF40-43C3-81C8-3F14A86EB7EE"];

const invalidExamples = [""];

describe("The isIdentifier type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, is a valid identifier",
      (validIdentifier) => {
        const result = isIdentifier(validIdentifier);
        expect(result).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, is an invalid identifier",
      (invalidIdentifier) => {
        const result = isIdentifier(invalidIdentifier);
        expect(result).toStrictEqual(false);
      }
    );
  });
});
