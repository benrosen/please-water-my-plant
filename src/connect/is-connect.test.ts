import { DISCONNECT } from "../disconnect";
import { CONNECT } from "./connect";
import { isConnect } from "./is-connect";

const validExamples = [CONNECT];

const invalidExamples = [DISCONNECT];

describe("The isConnect type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Connect interface",
      (validExample) => {
        const result = isConnect(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Connect interface",
      (invalidExample) => {
        const result = isConnect(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
