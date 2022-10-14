import { isJavascriptFilePath } from "./is-javascript-file-path";

const validExamples = [".js", "foo.js"];

const invalidExamples = [".ts", ".js.ts"];

describe("The isJavascriptFilePath type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the JavascriptFilePath interface",
      (validExample) => {
        const result = isJavascriptFilePath(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the JavascriptFilePath interface",
      (invalidExample) => {
        const result = isJavascriptFilePath(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
