import { isEntityRelated } from "./is-entity-related";

const validExamples = [{ entityId: "foo" }];

const invalidExamples = [{ entity: "foo" }, { id: "bar" }];

describe("The isEntityRelated type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the EntityRelated interface",
      (validExample) => {
        const result = isEntityRelated(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the EntityRelated interface",
      (invalidExample) => {
        const result = isEntityRelated(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
