import { isNotFoundStatusCode } from "./is-not-found-status-code";
import { NOT_FOUND_STATUS_CODE } from "./not-found-status-code";

const validExamples = [NOT_FOUND_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isNotFoundStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the NotFoundStatusCode interface",
      (validExample) => {
        const result = isNotFoundStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the NotFoundStatusCode interface",
      (invalidExample) => {
        const result = isNotFoundStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
