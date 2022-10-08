import {
  isUnauthorizedStatusCode,
  UNAUTHORIZED_STATUS_CODE,
} from "unauthorized-status-code";

const validExamples = [UNAUTHORIZED_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isUnauthorizedStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the UnauthorizedStatusCode interface",
      (validExample) => {
        const result = isUnauthorizedStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the UnauthorizedStatusCode interface",
      (invalidExample) => {
        const result = isUnauthorizedStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
