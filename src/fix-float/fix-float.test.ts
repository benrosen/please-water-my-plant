import { FIXED_POINT_DECIMAL_PLACES } from "../fixed-point-decimal-places";
import { fixFloat } from "./fix-float";

describe("The fixFloat function", () => {
  test.each([0, 1.0, 1.000009] as number[])(
    "should return a number that is close to the provided number",
    (validExample) => {
      const result = fixFloat(validExample);

      expect(result).toBeCloseTo(validExample, FIXED_POINT_DECIMAL_PLACES);
    }
  );
});
