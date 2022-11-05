import { isPastTimestamp } from "./is-past-timestamp";

const validExamples = [0, 1000, 1667675273801];

const invalidExamples = [Date.now() + 1000];

describe("The isPastTimestamp type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the PastTimestamp interface",
      (validExample) => {
        const result = isPastTimestamp(validExample);

        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the PastTimestamp interface",
      (invalidExample) => {
        const result = isPastTimestamp(invalidExample);

        expect(result).toBeFalsy();
      }
    );
  });
});
