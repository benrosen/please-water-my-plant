import {
  ACCEPTED_STATUS_CODE,
  isAcceptedStatusCode,
} from "accepted-status-code";

const validExamples = [ACCEPTED_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isAcceptedStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ACCEPTED_STATUS_CODE interface",
      (validExample) => {
        const result = isAcceptedStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ACCEPTED_STATUS_CODE interface",
      (invalidExample) => {
        const result = isAcceptedStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
