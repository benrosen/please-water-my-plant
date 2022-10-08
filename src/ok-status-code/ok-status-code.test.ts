import { isOkStatusCode, OK_STATUS_CODE, OkStatusCode } from "ok-status-code";

const validExamples: OkStatusCode[] = [OK_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 203, 404];

describe("The isOkStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the OK_STATUS_CODE interface",
      (validExample) => {
        const result = isOkStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the OK_STATUS_CODE interface",
      (invalidExample) => {
        const result = isOkStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
