import {
  INTERNAL_SERVER_ERROR_STATUS_CODE,
  isInternalServerErrorStatusCode,
} from "internal-server-error-status-code";

const validExamples = [INTERNAL_SERVER_ERROR_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isInternalServerErrorStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the INTERNAL_SERVER_ERROR_STATUS_CODE interface",
      (validExample) => {
        const result = isInternalServerErrorStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the INTERNAL_SERVER_ERROR_STATUS_CODE interface",
      (invalidExample) => {
        const result = isInternalServerErrorStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
