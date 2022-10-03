import { isMovedPermanentlyStatusCode } from "./is-moved-permanently-status-code";
import { MOVED_PERMANENTLY_STATUS_CODE } from "./moved-permanently-status-code";

const validExamples = [MOVED_PERMANENTLY_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isMovedPermanentlyStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the MovedPermanentlyStatusCode interface",
      (validExample) => {
        const result = isMovedPermanentlyStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the MovedPermanentlyStatusCode interface",
      (invalidExample) => {
        const result = isMovedPermanentlyStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
