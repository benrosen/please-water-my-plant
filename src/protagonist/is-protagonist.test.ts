import { ANTAGONIST } from "antagonist";
import { isProtagonist } from "./is-protagonist";
import { PROTAGONIST } from "./protagonist";

const validExamples = [PROTAGONIST];

const invalidExamples = [ANTAGONIST, false, ["foo", "bar"]];

describe("The isProtagonist type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Protagonist interface",
      (validExample) => {
        const result = isProtagonist(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Protagonist interface",
      (invalidExample) => {
        const result = isProtagonist(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
