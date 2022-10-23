import { PROTAGONIST } from "protagonist/protagonist";
import { ANTAGONIST } from "./antagonist";
import { isAntagonist } from "./is-antagonist";

const validExamples = [ANTAGONIST];

const invalidExamples = [PROTAGONIST, 0, false, [true, false]];

describe("The isAntagonist type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Antagonist interface",
      (validExample) => {
        const result = isAntagonist(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Antagonist interface",
      (invalidExample) => {
        const result = isAntagonist(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
