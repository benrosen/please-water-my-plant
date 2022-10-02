import { isIdentifiedByUuid } from "./is-identified-by-uuid";

const validExamples = [{ id: "566132FE-331E-432B-9A95-9DC672735451" }];

const invalidExamples = [{ id: 0 }];

describe("The isIdentifiedByUuid type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the IdentifiedByUuid interface",
      (validValue) => {
        const result = isIdentifiedByUuid(validValue);
        expect(result).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the IdentifiedByUuid interface",
      (invalidValue) => {
        const result = isIdentifiedByUuid(invalidValue);
        expect(result).toStrictEqual(false);
      }
    );
  });
});
