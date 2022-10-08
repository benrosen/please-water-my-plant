import {
  isProcessingStatusCode,
  PROCESSING_STATUS_CODE,
  ProcessingStatusCode,
} from "processing-status-code";

const validExamples: ProcessingStatusCode[] = [PROCESSING_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isProcessingStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ProcessingStatusCode interface",
      (validExample) => {
        const result = isProcessingStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ProcessingStatusCode interface",
      (invalidExample) => {
        const result = isProcessingStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
