import { isUtf8Encoding } from "./is-utf-8-encoding";
import { UTF_8_ENCODING } from "./utf-8-encoding";

const validExamples = [UTF_8_ENCODING];

const invalidExamples = ["utf8", "utf_8", "UTF-8"];

describe("The isUtf8Encoding type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Utf8Encoding interface",
      (validExample) => {
        const result = isUtf8Encoding(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Utf8Encoding interface",
      (invalidExample) => {
        const result = isUtf8Encoding(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
