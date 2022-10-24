import { isNamedConnect } from "./is-named-connect";

const validExamples = [];

const invalidExamples = [];

describe("The isNamedConnect type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the NamedConnect interface",
      (validExample) => {
        const result = isNamedConnect(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the NamedConnect interface",
      (invalidExample) => {
        const result = isNamedConnect(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
