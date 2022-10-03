import { INTERNAL_SERVER_ERROR_STATUS_CODE } from "../internal-server-error-status-code";
import { isServerErrorStatusCode } from "./is-server-error-status-code";

const validExamples = [INTERNAL_SERVER_ERROR_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isServerErrorStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ServerErrorStatusCode interface",
      (validExample) => {
        const result = isServerErrorStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ServerErrorStatusCode interface",
      (invalidExample) => {
        const result = isServerErrorStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
