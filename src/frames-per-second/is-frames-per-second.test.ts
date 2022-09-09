import { isFramesPerSecond } from "./is-frames-per-second";

const validExamples = [0, 1, 12];

const invalidExamples = [false, "hello"];

describe("The isFramesPerSecond type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the FramesPerSecond interface",
      (validExample) => {
        const result = isFramesPerSecond(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the FramesPerSecond interface",
      (invalidExample) => {
        const result = isFramesPerSecond(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
