import {
  isResetContentStatusCode,
  RESET_CONTENT_STATUS_CODE,
} from "reset-content-status-code";

const validExamples = [RESET_CONTENT_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isResetContentStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ResetContentStatusCode interface",
      (validExample) => {
        const result = isResetContentStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ResetContentStatusCode interface",
      (invalidExample) => {
        const result = isResetContentStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
