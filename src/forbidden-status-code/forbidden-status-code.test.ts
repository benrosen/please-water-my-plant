import {
  FORBIDDEN_STATUS_CODE,
  isForbiddenStatusCode,
} from "forbidden-status-code";

const validExamples = [FORBIDDEN_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isForbiddenStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ForbiddenStatusCode interface",
      (validExample) => {
        const result = isForbiddenStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ForbiddenStatusCode interface",
      (invalidExample) => {
        const result = isForbiddenStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
