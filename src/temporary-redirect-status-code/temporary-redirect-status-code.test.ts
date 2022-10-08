import {
  isTemporaryRedirectStatusCode,
  TEMPORARY_REDIRECT_STATUS_CODE,
} from "temporary-redirect-status-code";

const validExamples = [TEMPORARY_REDIRECT_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isTemporaryRedirectStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the TemporaryRedirectStatusCode interface",
      (validExample) => {
        const result = isTemporaryRedirectStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the TemporaryRedirectStatusCode interface",
      (invalidExample) => {
        const result = isTemporaryRedirectStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
