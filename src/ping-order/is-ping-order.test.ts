import { ANTAGONIST } from "antagonist";
import { createConnectOrder } from "create-connect-order";
import { createTimestamp } from "create-timestamp";
import { PING } from "ping";
import { createUuid } from "uuid";
import { isPingOrder } from "./is-ping-order";
import { PingOrder } from "./ping-order";

const validExamples: PingOrder[] = [
  {
    entityId: createUuid(),
    id: createUuid(),
    name: PING,
    position: {
      x: 0,
      y: 0,
    },
    timestamp: createTimestamp(),
  },
];

const invalidExamples = [
  createConnectOrder({
    entityId: createUuid(),
    role: ANTAGONIST,
  }),
];

describe("The isPingOrder type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the PingOrder interface",
      (validExample) => {
        const result = isPingOrder(validExample);

        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the PingOrder interface",
      (invalidExample) => {
        const result = isPingOrder(invalidExample);

        expect(result).toBeFalsy();
      }
    );
  });
});
