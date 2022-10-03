import { FOUND_STATUS_CODE } from "../found-status-code";
import { MOVED_PERMANENTLY_STATUS_CODE } from "../moved-permanently-status-code";
import { MULTIPLE_CHOICE_STATUS_CODE } from "../multiple-choices-status-code";
import { NOT_MODIFIED_STATUS_CODE } from "../not-modified-status-code";
import { PERMANENT_REDIRECT_STATUS_CODE } from "../permanent-redirect-status-code";
import { SEE_OTHER_STATUS_CODE } from "../see-other-status-code";
import { TEMPORARY_REDIRECT_STATUS_CODE } from "../temporary-redirect-status-code";
import { isRedirectionStatusCode } from "./is-redirection-status-code";

const validExamples = [
  MULTIPLE_CHOICE_STATUS_CODE,
  MOVED_PERMANENTLY_STATUS_CODE,
  FOUND_STATUS_CODE,
  SEE_OTHER_STATUS_CODE,
  NOT_MODIFIED_STATUS_CODE,
  TEMPORARY_REDIRECT_STATUS_CODE,
  PERMANENT_REDIRECT_STATUS_CODE,
];

const invalidExamples = [0, 1, 101, 1001, 200, 404];

describe("The isRedirectionStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the RedirectionStatusCode interface",
      (validExample) => {
        const result = isRedirectionStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the RedirectionStatusCode interface",
      (invalidExample) => {
        const result = isRedirectionStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
