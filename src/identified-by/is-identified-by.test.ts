import { isIdentifiedBy } from "./is-identified-by";

const validExamples = [
  { id: "36955F34-2B2B-419B-918A-65357C55151F" },
  { id: "BEAB542D-5383-4C51-891E-7762D8D25A9B" },
];

const invalidExamples = [{ foo: "bar" }, { id: { foo: "bar" } }, { id: 0 }];

describe("The isIdentifiedBy type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the isIdentifiedBy interface",
      (validValue) => {
        const result = isIdentifiedBy(validValue);
        expect(result).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the isIdentifiedBy interface",
      (invalidValue) => {
        const result = isIdentifiedBy(invalidValue);
        expect(result).toStrictEqual(false);
      }
    );
  });
});
