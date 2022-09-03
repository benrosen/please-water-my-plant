import { isIdentifiedBy } from "./is-identified-by";

describe("The isIdentifiedBy type-guard function", () => {
  describe("should return true", () => {
    test.each([{ id: "foo" }, { id: "bar" }])(
      "when the given value, %j, implements the isIdentifiedBy interface",
      (validValue) => {
        const implementsIsIdentifiedBy = isIdentifiedBy(validValue);
        expect(implementsIsIdentifiedBy).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each([{ foo: "bar" }, { id: { foo: "bar" } }, { id: 0 }])(
      "when the given value, %j, does not implement the isIdentifiedBy interface",
      (invalidValue) => {
        const implementsIsIdentifiedBy = isIdentifiedBy(invalidValue);
        expect(implementsIsIdentifiedBy).toBeFalsy();
      }
    );
  });
});
