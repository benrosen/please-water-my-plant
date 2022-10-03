import { isPermanentRedirectStatusCode } from "./is-permanent-redirect-status-code";
import { PERMANENT_REDIRECT_STATUS_CODE } from "./permanent-redirect-status-code";

const validExamples = [PERMANENT_REDIRECT_STATUS_CODE];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isPermanentRedirectStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the PermanentRedirectStatusCode interface",
      (validExample) => {
        const result = isPermanentRedirectStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the PermanentRedirectStatusCode interface",
      (invalidExample) => {
        const result = isPermanentRedirectStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
