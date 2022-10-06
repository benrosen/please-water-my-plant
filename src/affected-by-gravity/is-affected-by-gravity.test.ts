import { isAffectedByGravity } from "./is-affected-by-gravity";

const validExamples = [{ affectedByGravity: true }];

const invalidExamples = [
  { entity: "foo" },
  { id: "bar" },
  { affectedByGravity: "baz" },
  { affectedByGravity: 1 },
  { affectedByGravity: undefined },
];

describe("The isAffectedByGravity type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the AffectedByGravity interface",
      (validExample) => {
        const result = isAffectedByGravity(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the AffectedByGravity interface",
      (invalidExample) => {
        const result = isAffectedByGravity(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
