import {
  BAD_REQUEST_STATUS_CODE,
  isBadRequestStatusCode,
} from "bad-request-status-code";

const validExamples = [BAD_REQUEST_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isBadRequestStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the BadRequestStatusCode interface",
      (validExample) => {
        const result = isBadRequestStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the BadRequestStatusCode interface",
      (invalidExample) => {
        const result = isBadRequestStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
