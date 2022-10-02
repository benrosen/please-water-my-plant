import { CONTINUE_STATUS_CODE } from "./continue-status-code";
import { isContinueStatusCode } from "./is-continue-status-code";

const validExamples = [CONTINUE_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isContinueStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ContinueStatusCode interface",
      (validExample) => {
        const result = isContinueStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ContinueStatusCode interface",
      (invalidExample) => {
        const result = isContinueStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
