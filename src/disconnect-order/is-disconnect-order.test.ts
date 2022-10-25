import { CONNECT } from "../connect";
import { createTimestamp } from "../create-timestamp";
import { DISCONNECT } from "../disconnect";
import { createUuid } from "../uuid";
import { DisconnectOrder } from "./disconnect-order";
import { isDisconnectOrder } from "./is-disconnect-order";

const validExamples: DisconnectOrder[] = [
  {
    id: createUuid(),
    entityId: createUuid(),
    name: DISCONNECT,
    timestamp: createTimestamp(),
  },
];

const invalidExamples = [
  {
    id: createUuid(),
    entityId: createUuid(),
    name: CONNECT,
    timestamp: createTimestamp(),
  },
];

describe("The isDisconnectOrder type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the DisconnectOrder interface",
      (validExample) => {
        const result = isDisconnectOrder(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the DisconnectOrder interface",
      (invalidExample) => {
        const result = isDisconnectOrder(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
