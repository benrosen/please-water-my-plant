import { isTypescriptFilePath } from "./is-typescript-file-path";

const validExamples = [".ts", "foo.ts"];

const invalidExamples = [".js", "foo", "foo.ts.js"];

describe("The isTypescriptFilePath type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the TypescriptFilePath interface",
      (validExample) => {
        const result = isTypescriptFilePath(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the TypescriptFilePath interface",
      (invalidExample) => {
        const result = isTypescriptFilePath(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
