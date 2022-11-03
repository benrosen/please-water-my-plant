import { DISCONNECT } from "disconnect";
import { isNamed } from "./is-named";

const validExamples = [{ name: DISCONNECT }];

const invalidExamples = [{ foo: "bar" }];

describe("The isNamed type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Named interface",
      (validExample) => {
        const result = isNamed(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Named interface",
      (invalidExample) => {
        const result = isNamed(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
