import { isIdentifier } from "./is-identifier";

describe("The isIdentifier type-guard function", () => {
  describe("should return true", () => {
    test.each(["foo"])(
      "when the given value, %j, is a valid identifier",
      (validIdentifier) => {
        const isValidIdentifier = isIdentifier(validIdentifier);
        expect(isValidIdentifier).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each([""])(
      "when the given value, %j, is an invalid identifier",
      (invalidIdentifier) => {
        const isValidIdentifier = isIdentifier(invalidIdentifier);
        expect(isValidIdentifier).toBeFalsy();
      }
    );
  });
});
