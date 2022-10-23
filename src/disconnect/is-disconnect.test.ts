import { CONNECT } from "../connect";
import { DISCONNECT } from "./disconnect";
import { isDisconnect } from "./is-disconnect";

const validExamples = [DISCONNECT];

const invalidExamples = [CONNECT];

describe("The isDisconnect type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Disconnect interface",
      (validExample) => {
        const result = isDisconnect(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Disconnect interface",
      (invalidExample) => {
        const result = isDisconnect(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
