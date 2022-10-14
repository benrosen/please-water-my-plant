import { JAVASCRIPT_FILE_EXTENSION } from "../javascript-file-extension";
import { TYPESCRIPT_FILE_EXTENSION } from "../typescript-file-extension";
import { isFileExtension } from "./is-file-extension";

const validExamples = [JAVASCRIPT_FILE_EXTENSION, TYPESCRIPT_FILE_EXTENSION];

const invalidExamples = ["js", "ts"];

describe("The isFileExtension type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the FileExtension interface",
      (validExample) => {
        const result = isFileExtension(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the FileExtension interface",
      (invalidExample) => {
        const result = isFileExtension(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
