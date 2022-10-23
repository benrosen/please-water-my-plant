import { ANTAGONIST } from "antagonist";
import { PROTAGONIST } from "protagonist";
import { isRole } from "./is-role";

const validExamples = [ANTAGONIST, PROTAGONIST];

const invalidExamples = [true, 0, 123, "foo", [{ foo: "bar" }]];

describe("The isRole type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Role interface",
      (validExample) => {
        const result = isRole(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Role interface",
      (invalidExample) => {
        const result = isRole(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
