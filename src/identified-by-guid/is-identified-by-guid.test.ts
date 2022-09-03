import { isIdentifiedByGuid } from "./is-identified-by-guid";

describe("The isIdentifiedByGuid type-guard function", () => {
  describe("should return true", () => {
    test.each([{ id: "foo" }])(
      "when the given value, %j, is identified by a guid",
      (validValue) => {
        expect(isIdentifiedByGuid(validValue)).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each([{ id: 0 }])(
      "when the given value, %j, is not identified by a guid",
      (invalidValue) => {
        expect(isIdentifiedByGuid(invalidValue)).toBeFalsy();
      }
    );
  });
});
