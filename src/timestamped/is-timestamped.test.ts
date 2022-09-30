import { isTimestamped } from "./is-timestamped";

const validExamples = [{ timestamp: 0 }];

const invalidExamples = [{ id: 0 }];

describe("The isTimestamped type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the isTimestamped interface",
      (validValue) => {
        expect(isTimestamped(validValue)).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does NOT implement the isTimestamped interface",
      (invalidValue) => {
        expect(isTimestamped(invalidValue)).toStrictEqual(false);
      }
    );
  });
});
