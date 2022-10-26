import { ANTAGONIST } from "antagonist";
import { PROTAGONIST } from "protagonist";
import { Antagonistic } from "./antagonistic";
import { isAntagonistic } from "./is-antagonistic";

const validExamples: Antagonistic[] = [{ role: ANTAGONIST }];

const invalidExamples = [{ role: PROTAGONIST }];

describe("The isAntagonistic type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Antagonistic interface",
      (validExample) => {
        const result = isAntagonistic(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Antagonistic interface",
      (invalidExample) => {
        const result = isAntagonistic(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
