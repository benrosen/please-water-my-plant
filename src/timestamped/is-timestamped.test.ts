import { isTimestamped } from "./is-timestamped";

describe("The isTimestamped type-guard function", () => {
  describe("should return true", () => {
    test.each([{ timestamp: 0 }])(
      "when the given value, %j, implements the isTimestamped interface",
      (validValue) => {
        expect(isTimestamped(validValue)).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each([{ id: 0 }])(
      "when the given value, %j, does NOT implement the isTimestamped interface",
      (invalidValue) => {
        expect(isTimestamped(invalidValue)).toBeFalsy();
      }
    );
  });
});
