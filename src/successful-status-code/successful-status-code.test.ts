import { ACCEPTED_STATUS_CODE } from "accepted-status-code";
import { CREATED_STATUS_CODE } from "created-status-code";
import { NO_CONTENT_STATUS_CODE } from "no-content-status-code";
import { NON_AUTHORITATIVE_INFORMATION_STATUS_CODE } from "non-authoritative-information-status-code";
import { OK_STATUS_CODE } from "ok-status-code";
import { PARTIAL_CONTENT_STATUS_CODE } from "partial-content-status-code";
import { RESET_CONTENT_STATUS_CODE } from "reset-content-status-code";
import { isSuccessfulStatusCode } from "successful-status-code";

const validExamples = [
  OK_STATUS_CODE,
  CREATED_STATUS_CODE,
  ACCEPTED_STATUS_CODE,
  NON_AUTHORITATIVE_INFORMATION_STATUS_CODE,
  NO_CONTENT_STATUS_CODE,
  RESET_CONTENT_STATUS_CODE,
  PARTIAL_CONTENT_STATUS_CODE,
];

const invalidExamples = [0, 1, 101, 1001, 250, 404];

describe("The isSuccessfulStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the SuccessfulStatusCode interface",
      (validExample) => {
        const result = isSuccessfulStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the SuccessfulStatusCode interface",
      (invalidExample) => {
        const result = isSuccessfulStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
