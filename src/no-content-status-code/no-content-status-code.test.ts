import {
  isNoContentStatusCode,
  NO_CONTENT_STATUS_CODE,
} from "no-content-status-code";

const validExamples = [NO_CONTENT_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isNoContentStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the NoContentStatusCode interface",
      (validExample) => {
        const result = isNoContentStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the NoContentStatusCode interface",
      (invalidExample) => {
        const result = isNoContentStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
