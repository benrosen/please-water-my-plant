import { CONNECT } from "connect";
import { PING } from "ping";
import { isNamedPing } from "./is-named-ping";
import { NamedPing } from "./named-ping";

const validExamples: NamedPing[] = [{ name: PING }];

const invalidExamples = [{ name: CONNECT }];

describe("The isNamedPing type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the NamedPing interface",
      (validExample) => {
        const result = isNamedPing(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the NamedPing interface",
      (invalidExample) => {
        const result = isNamedPing(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
