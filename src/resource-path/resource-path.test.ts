import { isResourcePath } from "./is-resource-path";

const validExamples = ["/foo", "/bar", "/baz"];

const invalidExamples = ["foo", "bar/baz", "../baz"];

describe("The isResourcePath type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ResourcePath interface",
      (validExample) => {
        const result = isResourcePath(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ResourcePath interface",
      (invalidExample) => {
        const result = isResourcePath(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
