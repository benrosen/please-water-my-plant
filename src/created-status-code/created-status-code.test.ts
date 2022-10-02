import { CREATED_STATUS_CODE } from "./created-status-code";
import { isCreatedStatusCode } from "./is-created-status-code";

const validExamples = [CREATED_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isCreatedStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the CreatedStatusCode interface",
      (validExample) => {
        const result = isCreatedStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the CreatedStatusCode interface",
      (invalidExample) => {
        const result = isCreatedStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
