import { isVector } from "../vector";

const validExamples = [{ x: 0, y: 0 }];

const invalidExamples = [{ entity: "foo" }, { id: "bar" }];

describe("The isVector type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Vector interface",
      (validExample) => {
        const result = isVector(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Vector interface",
      (invalidExample) => {
        const result = isVector(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
