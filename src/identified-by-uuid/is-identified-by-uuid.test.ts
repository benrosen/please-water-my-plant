import { isIdentifiedByUuid } from "identified-by-uuid";

const validExamples = [
  { id: "36955F34-2B2B-419B-918A-65357C55151F" },
  { id: "BEAB542D-5383-4C51-891E-7762D8D25A9B" },
  { id: "059E1AF8-E478-49F8-8D17-AE85AFCC6130" },
  { id: "B3C46B04-6AAF-452D-A79D-D210C54528B6" },
  { id: "14DDB300-ED62-4CF6-A516-860EEE68A2D4" },
];

const invalidExamples = [
  { foo: "bar" },
  { id: { foo: "bar" } },
  { id: 0 },
  { id: "14DDB300-ED62-4CF6-A516" },
  { id: "918A-65357C55151F" },
];

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
