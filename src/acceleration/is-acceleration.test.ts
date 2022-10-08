import { isAcceleration } from "acceleration";

const validExamples = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: -1, y: 0 },
  { x: 0, y: -1 },
  { x: -1, y: -1 },
  { x: 98765.4, y: 12.3456 },
  { x: -567.89, y: 8 },
];

const invalidExamples = [
  { entity: "foo" },
  { id: "bar" },
  false,
  "baz",
  123,
  { x: 0 },
  { y: 92 },
  { x: 15, y: "foo" },
  { x: false, y: 1 },
  { x: "bar", y: "baz" },
];

describe("The isAcceleration type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Acceleration interface",
      (validExample) => {
        const result = isAcceleration(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Acceleration interface",
      (invalidExample) => {
        const result = isAcceleration(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
