import { isKinematic } from "kinematic";

const validExamples = [
  { acceleration: { x: 0, y: 0 }, velocity: { x: 0, y: 0 } },
  { acceleration: { x: 0, y: -1 }, velocity: { x: 1, y: 1 } },
  { acceleration: { x: 0, y: 0 }, velocity: { x: 0, y: 5.432 } },
  { acceleration: { x: 0, y: -1 }, velocity: { x: 0, y: 0 } },
  { acceleration: { x: 0, y: 0.090087 }, velocity: { x: 1.324, y: 0 } },
];

const invalidExamples = [
  { entity: "foo" },
  { id: "bar" },
  {
    acceleration: { x: false, y: 0 },
    velocity: { x: 0, y: "baz" },
  },
  { acceleration: { x: 0, y: 0 }, velocity: { a: 0, b: 0 } },
  { acceleration: { x: 0, z: 0 }, velocity: { x: 0, y: 0 } },
];

describe("The isKinematic type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Kinematic interface",
      (validExample) => {
        const result = isKinematic(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Kinematic interface",
      (invalidExample) => {
        const result = isKinematic(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
