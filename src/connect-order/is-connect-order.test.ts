import { ANTAGONIST } from "antagonist";
import { CONNECT } from "connect";
import { createTimestamp } from "create-timestamp";
import { DISCONNECT } from "disconnect";
import { PROTAGONIST } from "protagonist";
import { createUuid } from "uuid";
import { ConnectOrder } from "./connect-order";
import { isConnectOrder } from "./is-connect-order";

const validExamples: ConnectOrder[] = [
  {
    id: createUuid(),
    entityId: createUuid(),
    name: CONNECT,
    role: ANTAGONIST,
    timestamp: createTimestamp(),
  },
  {
    id: createUuid(),
    entityId: createUuid(),
    name: CONNECT,
    role: PROTAGONIST,
    timestamp: createTimestamp(),
  },
];

const invalidExamples = [
  {
    id: createUuid(),
    entityId: createUuid(),
    name: DISCONNECT,
    role: ANTAGONIST,
    timestamp: createTimestamp(),
  },
];

describe("The isConnectOrder type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ConnectOrder interface",
      (validExample) => {
        const result = isConnectOrder(validExample);

        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ConnectOrder interface",
      (invalidExample) => {
        const result = isConnectOrder(invalidExample);

        expect(result).toBeFalsy();
      }
    );
  });
});
