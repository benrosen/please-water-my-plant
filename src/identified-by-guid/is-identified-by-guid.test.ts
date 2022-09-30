import { isIdentifiedByGuid } from "./is-identified-by-guid";

const validExamples = [{ id: "foo" }];

const invalidExamples = [{ id: 0 }];

describe("The isIdentifiedByGuid type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the IdentifiedByGuid interface",
      (validValue) => {
        const result = isIdentifiedByGuid(validValue);
        expect(result).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the IdentifiedByGuid interface",
      (invalidValue) => {
        const result = isIdentifiedByGuid(invalidValue);
        expect(result).toStrictEqual(false);
      }
    );
  });
});
