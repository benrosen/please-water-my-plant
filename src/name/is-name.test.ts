import { isName } from "name";

const validExamples = ["my name", "nombre"];

const invalidExamples = [false, 0];

describe("The isName type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Name interface",
      (validExample) => {
        const result = isName(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Name interface",
      (invalidExample) => {
        const result = isName(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
