import {
  isMultipleChoicesStatusCode,
  MULTIPLE_CHOICE_STATUS_CODE,
} from "multiple-choices-status-code";

const validExamples = [MULTIPLE_CHOICE_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isMultipleChoicesStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the MultipleChoicesStatusCode interface",
      (validExample) => {
        const result = isMultipleChoicesStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the MultipleChoicesStatusCode interface",
      (invalidExample) => {
        const result = isMultipleChoicesStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
