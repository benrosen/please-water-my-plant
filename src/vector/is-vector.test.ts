import { isVector, Vector } from "vector";

const validExamples: Vector[] = [
  { x: 0, y: 0 },
  { x: 0, y: -1 },
  { x: -1, y: 0 },
  { x: 1, y: -1 },
  { x: 0.090087, y: 1.324 },
];

const invalidExamples: unknown[] = [
  { entity: "foo" },
  { id: "bar" },
  { x: 0, y: false },
  { x: "baz", y: 0 },
  { x: 0, z: 0 },
];

describe("The isVector type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Vector interface",
      (validExample) => {
        const result = isVector(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Vector interface",
      (invalidExample) => {
        const result = isVector(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
