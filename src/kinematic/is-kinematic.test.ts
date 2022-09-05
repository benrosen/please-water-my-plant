import { isKinematic } from "./is-kinematic";

const validExamples = [
  { acceleration: { x: 0, y: 0 }, velocity: { x: 0, y: 0 } },
];

const invalidExamples = [{ entity: "foo" }, { id: "bar" }];

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
