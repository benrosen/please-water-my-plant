import { CONNECT } from "../connect";
import { DISCONNECT } from "../disconnect";
import { isNamedConnect } from "./is-named-connect";
import { NamedConnect } from "./named-connect";

const validExamples: NamedConnect[] = [{ name: CONNECT }];

const invalidExamples = [{ name: DISCONNECT }];

describe("The isNamedConnect type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the NamedConnect interface",
      (validExample) => {
        const result = isNamedConnect(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the NamedConnect interface",
      (invalidExample) => {
        const result = isNamedConnect(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
