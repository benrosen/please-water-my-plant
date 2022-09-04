import { isColored } from "./is-colored";

const validExamples = [{ color: "foo" }];

const invalidExamples = [{ entity: "foo" }, { id: "bar" }];

describe("The isColored type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Colored interface",
      (validExample) => {
        const result = isColored(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Colored interface",
      (invalidExample) => {
        const result = isColored(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
