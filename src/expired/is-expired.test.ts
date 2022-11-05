import { createTimestamp } from "create-timestamp";
import { isExpired } from "./is-expired";

const validExamples = [
  {
    expiresAt: createTimestamp() - 1000,
  },
];

const invalidExamples = [
  {
    expiresAt: createTimestamp() + 1000,
  },
];

describe("The isExpired type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Expired interface",
      (validExample) => {
        const result = isExpired(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Expired interface",
      (invalidExample) => {
        const result = isExpired(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
