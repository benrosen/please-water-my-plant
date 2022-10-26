import { isPositioned } from "./is-positioned";
import { Positioned } from "./positioned";

const validExamples: Positioned[] = [
  {
    position: {
      x: 0,
      y: 0,
    },
  },
];

const invalidExamples = [{ x: 0, y: 0 }, { position: "x0y0" }];

describe("The isPositioned type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Positioned interface",
      (validExample) => {
        const result = isPositioned(validExample);

        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Positioned interface",
      (invalidExample) => {
        const result = isPositioned(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
