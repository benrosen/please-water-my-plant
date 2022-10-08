import { FOUND_STATUS_CODE, isFoundStatusCode } from "found-status-code";

const validExamples = [FOUND_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isFoundStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the FoundStatusCode interface",
      (validExample) => {
        const result = isFoundStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the FoundStatusCode interface",
      (invalidExample) => {
        const result = isFoundStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
