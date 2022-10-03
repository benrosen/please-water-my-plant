import { BAD_REQUEST_STATUS_CODE } from "../bad-request-status-code";
import { FORBIDDEN_STATUS_CODE } from "../forbidden-status-code";
import { NOT_FOUND_STATUS_CODE } from "../not-found-status-code";
import { UNAUTHORIZED_STATUS_CODE } from "../unauthorized-status-code";
import { isClientErrorStatusCode } from "./is-client-error-status-code";

const validExamples = [
  BAD_REQUEST_STATUS_CODE,
  UNAUTHORIZED_STATUS_CODE,
  FORBIDDEN_STATUS_CODE,
  NOT_FOUND_STATUS_CODE,
];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isClientErrorStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ClientErrorStatusCode interface",
      (validExample) => {
        const result = isClientErrorStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ClientErrorStatusCode interface",
      (invalidExample) => {
        const result = isClientErrorStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
