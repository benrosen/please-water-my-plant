import { ANTAGONIST } from "antagonist";
import { PROTAGONIST } from "protagonist";
import { isProtagonistic } from "./is-protagonistic";
import { Protagonistic } from "./protagonistic";

const validExamples: Protagonistic[] = [
  {
    role: PROTAGONIST,
  },
];

const invalidExamples = [
  {
    role: ANTAGONIST,
  },
];

describe("The isProtagonistic type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Protagonistic interface",
      (validExample) => {
        const result = isProtagonistic(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Protagonistic interface",
      (invalidExample) => {
        const result = isProtagonistic(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
