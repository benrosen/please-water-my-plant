import { isStatusCode } from "./is-status-code";

const validExamples = [200, 400];

const invalidExamples = ["hello"];

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
