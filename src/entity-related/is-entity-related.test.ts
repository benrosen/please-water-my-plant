import { isEntityRelated } from "./is-entity-related";

const validExamples = [{ entityId: "E99B677C-2C29-46B6-91D1-A57296699EC8" }];

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
