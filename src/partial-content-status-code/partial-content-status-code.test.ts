import { isPartialContentStatusCode } from "./is-partial-content-status-code";
import { PARTIAL_CONTENT_STATUS_CODE } from "./partial-content-status-code";

const validExamples = [PARTIAL_CONTENT_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isPartialContentStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the PartialContentStatusCode interface",
      (validExample) => {
        const result = isPartialContentStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the PartialContentStatusCode interface",
      (invalidExample) => {
        const result = isPartialContentStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
