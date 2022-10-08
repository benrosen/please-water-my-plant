import {
  isSeeOtherStatusCode,
  SEE_OTHER_STATUS_CODE,
} from "see-other-status-code";

const validExamples = [SEE_OTHER_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isSeeOtherStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the SeeOtherStatusCode interface",
      (validExample) => {
        const result = isSeeOtherStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the SeeOtherStatusCode interface",
      (invalidExample) => {
        const result = isSeeOtherStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
