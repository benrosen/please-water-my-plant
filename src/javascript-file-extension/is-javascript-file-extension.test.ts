import { isJavascriptFileExtension } from "./is-javascript-file-extension";
import { JAVASCRIPT_FILE_EXTENSION } from "./javascript-file-extension";

const validExamples = [JAVASCRIPT_FILE_EXTENSION];

const invalidExamples = [".js.ts", ".ts", "js"];

describe("The isJavascriptFileExtension type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the JavascriptFileExtension interface",
      (validExample) => {
        const result = isJavascriptFileExtension(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the JavascriptFileExtension interface",
      (invalidExample) => {
        const result = isJavascriptFileExtension(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
