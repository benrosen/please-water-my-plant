import { isGuid } from "./is-guid";

const validGuids = ["asdf"];

const invalidGuids = [""];

describe("The isGuid type-guard function", () => {
  describe("should return true", () => {
    test.each(validGuids)(
      "when the given value, %j, is a VALID guid",
      (validGuid) => {
        const isValidGuid = isGuid(validGuid);
        expect(isValidGuid).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidGuids)(
      "when the given value, %j, is an INVALID guid",
      (invalidGuid) => {
        const isValidGuid = isGuid(invalidGuid);
        expect(isValidGuid).toBeFalsy();
      }
    );
  });
});
