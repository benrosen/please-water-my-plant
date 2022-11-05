import { createTimestamp } from "create-timestamp";
import { isPerishable } from "./is-perishable";

const validExamples = [{ expiresAt: createTimestamp() }];

const invalidExamples = [{ expiresAt: "foo" }];

describe("The isPerishable type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Perishable interface",
      (validExample) => {
        const result = isPerishable(validExample);

        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Perishable interface",
      (invalidExample) => {
        const result = isPerishable(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
