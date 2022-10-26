import { ANTAGONIST } from "antagonist";
import { PROTAGONIST } from "protagonist";
import { isRoleRelated } from "./is-role-related";

const validExamples = [
  {
    role: ANTAGONIST,
  },
  {
    foo: "bar",
    role: PROTAGONIST,
  },
];

const invalidExamples = [{ foo: "bar" }];

describe("The isRoleRelated type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the RoleRelated interface",
      (validExample) => {
        const result = isRoleRelated(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the RoleRelated interface",
      (invalidExample) => {
        const result = isRoleRelated(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
