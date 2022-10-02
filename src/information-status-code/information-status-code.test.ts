import { CONTINUE_STATUS_CODE } from "../continue-status-code";
import { EARLY_HINTS_STATUS_CODE } from "../early-hints-status-code";
import { PROCESSING_STATUS_CODE } from "../processing-status-code/processing-status-code";
import { SWITCHING_PROTOCOLS_STATUS_CODE } from "../switching-protocols-status-code";
import { isInformationStatusCode } from "./is-information-status-code";

const validExamples = [
  CONTINUE_STATUS_CODE,
  SWITCHING_PROTOCOLS_STATUS_CODE,
  PROCESSING_STATUS_CODE,
  EARLY_HINTS_STATUS_CODE,
];

const invalidExamples = [0, 1, 104, 1001, 200, 404];

describe("The isInformationStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the InformationStatusCode interface",
      (validExample) => {
        const result = isInformationStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the InformationStatusCode interface",
      (invalidExample) => {
        const result = isInformationStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
