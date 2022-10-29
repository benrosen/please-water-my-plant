import { CONNECT } from "connect";
import { isPing } from "./is-ping";
import { PING } from "./ping";

const validExamples = [PING];

const invalidExamples = [CONNECT, false, 1];

describe("The isPing type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Ping interface",
      (validExample) => {
        const result = isPing(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Ping interface",
      (invalidExample) => {
        const result = isPing(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
