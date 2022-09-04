import { isPosition } from "./is-position";

const validExamples = [{ x: 0, y: 0 }];

const invalidExamples = [{ entity: "foo" }, { id: "bar" }];

describe("The isPosition type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Position interface",
      (validExample) => {
        const result = isPosition(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Position interface",
      (invalidExample) => {
        const result = isPosition(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
