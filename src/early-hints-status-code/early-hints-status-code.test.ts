import {
  EARLY_HINTS_STATUS_CODE,
  isEarlyHintsStatusCode,
} from "early-hints-status-code";

const validExamples = [EARLY_HINTS_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isEarlyHintsStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the EarlyHintsStatusCode interface",
      (validExample) => {
        const result = isEarlyHintsStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the EarlyHintsStatusCode interface",
      (invalidExample) => {
        const result = isEarlyHintsStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
