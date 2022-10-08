import { isTimestamp } from "timestamp";

describe("The isTimestamp type-guard function", () => {
  describe("should return true", () => {
    test.each([0])(
      "when the given value, %j, is a valid timestamp",
      (validTimestamp) => {
        const isValidTimestamp = isTimestamp(validTimestamp);
        expect(isValidTimestamp).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each([""])(
      "when the given value, %j, is an invalid timestamp",
      (invalidTimestamp) => {
        const isValidTimestamp = isTimestamp(invalidTimestamp);
        expect(isValidTimestamp).toBeFalsy();
      }
    );
  });
});
