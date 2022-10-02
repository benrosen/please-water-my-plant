import { isNonAuthoritativeInformationStatusCode } from "./is-non-authoritative-information-status-code";
import { NON_AUTHORITATIVE_INFORMATION_STATUS_CODE } from "./non-authoritative-information-status-code";

const validExamples = [NON_AUTHORITATIVE_INFORMATION_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isNonAuthoritativeInformationStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the NonAuthoritativeInformationStatusCode interface",
      (validExample) => {
        const result = isNonAuthoritativeInformationStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the NonAuthoritativeInformationStatusCode interface",
      (invalidExample) => {
        const result = isNonAuthoritativeInformationStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
