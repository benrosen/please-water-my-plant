import { fixFloat } from "fix-float";
import { config } from "../../package.json";

describe("The fixFloat function", () => {
  test.each([0, 1.0, 1.000009] as number[])(
    "should return a number that is close to the provided number",
    (validExample) => {
      const result = fixFloat(validExample);

      expect(result).toBeCloseTo(validExample, config.fixedPointDecimalPlaces);
    }
  );
});
