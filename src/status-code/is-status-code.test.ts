import { ACCEPTED_STATUS_CODE } from "accepted-status-code";
import { CONTINUE_STATUS_CODE } from "continue-status-code";
import { CREATED_STATUS_CODE } from "created-status-code";
import { EARLY_HINTS_STATUS_CODE } from "early-hints-status-code";
import { NO_CONTENT_STATUS_CODE } from "no-content-status-code";
import { NON_AUTHORITATIVE_INFORMATION_STATUS_CODE } from "non-authoritative-information-status-code";
import { OK_STATUS_CODE } from "ok-status-code";
import { PARTIAL_CONTENT_STATUS_CODE } from "partial-content-status-code";
import { PROCESSING_STATUS_CODE } from "processing-status-code";
import { RESET_CONTENT_STATUS_CODE } from "reset-content-status-code";
import { isStatusCode } from "status-code";
import { SWITCHING_PROTOCOLS_STATUS_CODE } from "switching-protocols-status-code";

const validExamples = [
  CONTINUE_STATUS_CODE,
  SWITCHING_PROTOCOLS_STATUS_CODE,
  PROCESSING_STATUS_CODE,
  EARLY_HINTS_STATUS_CODE,
  OK_STATUS_CODE,
  CREATED_STATUS_CODE,
  ACCEPTED_STATUS_CODE,
  NON_AUTHORITATIVE_INFORMATION_STATUS_CODE,
  NO_CONTENT_STATUS_CODE,
  RESET_CONTENT_STATUS_CODE,
  PARTIAL_CONTENT_STATUS_CODE,
];

const invalidExamples = [0, 1, 732, 123, 1001];

describe("The isStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the StatusCode interface",
      (validExample) => {
        const result = isStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the StatusCode interface",
      (invalidExample) => {
        const result = isStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
