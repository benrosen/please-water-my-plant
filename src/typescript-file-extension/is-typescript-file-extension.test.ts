import { isTypescriptFileExtension } from "./is-typescript-file-extension";
import { TYPESCRIPT_FILE_EXTENSION } from "./typescript-file-extension";

const validExamples = [TYPESCRIPT_FILE_EXTENSION];

const invalidExamples = [".js", ".md", ".html", "ts"];

describe("The isTypescriptFileExtension type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the TypescriptFileExtension interface",
      (validExample) => {
        const result = isTypescriptFileExtension(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the TypescriptFileExtension interface",
      (invalidExample) => {
        const result = isTypescriptFileExtension(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
