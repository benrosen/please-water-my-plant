import { Vector } from "../vector";
import { fixVector } from "./fix-vector";

describe("The fixVector function", () => {
  test.each([
    { x: 0, y: 0 },
    { x: 1.0000097, y: 12.87654321 },
    { x: 0, y: 0.000009 },
  ] as Vector[])(
    "should return a vector that is close to the provided vector",
    (validExample) => {
      const result = fixVector(validExample);

      expect(result.x).toBeCloseTo(validExample.x);
      expect(result.y).toBeCloseTo(validExample.y);
    }
  );
});
