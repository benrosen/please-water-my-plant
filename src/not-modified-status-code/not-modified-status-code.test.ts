import {
  isNotModifiedStatusCode,
  NOT_MODIFIED_STATUS_CODE,
} from "not-modified-status-code";

const validExamples = [NOT_MODIFIED_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isNotModifiedStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the NotModifiedStatusCode interface",
      (validExample) => {
        const result = isNotModifiedStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the NotModifiedStatusCode interface",
      (invalidExample) => {
        const result = isNotModifiedStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
