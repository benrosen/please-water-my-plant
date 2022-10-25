import { ANTAGONIST } from "antagonist";
import { PROTAGONIST } from "protagonist";
import { createUuid } from "uuid";
import { ConnectOrder } from "./connect-order";
import { isConnectOrder } from "./is-connect-order";

const validExamples: ConnectOrder[] = [
  {
    id: createUuid(),
    entityId: createUuid(),
    name: "connect",
    role: ANTAGONIST,
    timestamp: Date.now(),
  },
  {
    id: createUuid(),
    entityId: createUuid(),
    name: "connect",
    role: PROTAGONIST,
    timestamp: Date.now(),
  },
];

const invalidExamples = [
  {
    id: createUuid(),
    entityId: createUuid(),
    name: "disconnect",
    role: ANTAGONIST,
    timestamp: Date.now(),
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
