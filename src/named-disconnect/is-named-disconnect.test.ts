import { CONNECT } from "connect";
import { DISCONNECT } from "disconnect";
import { isNamedDisconnect } from "./is-named-disconnect";

const validExamples = [{ name: DISCONNECT }];

const invalidExamples = [{ name: CONNECT }];

describe("The isNamedDisconnect type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the NamedDisconnect interface",
      (validExample) => {
        const result = isNamedDisconnect(validExample);

        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the NamedDisconnect interface",
      (invalidExample) => {
        const result = isNamedDisconnect(invalidExample);

        expect(result).toBeFalsy();
      }
    );
  });
});
