import { ANTAGONIST } from "antagonist";
import { CONNECT } from "connect";
import { createAntagonisticComponent } from "create-antagonistic-component";
import { createProtagonisticComponent } from "create-protagonistic-component";
import { PROTAGONIST } from "protagonist";
import { createUuid } from "uuid";
import { handleConnectOrder } from "./handle-connect-order";

jest.mock("create-antagonistic-component");

const mockCreateAntagonisticComponent = jest.mocked(
  createAntagonisticComponent
);

jest.mock("create-protagonistic-component");

const mockCreateProtagonisticComponent = jest.mocked(
  createProtagonisticComponent
);

describe("The handleConnectOrder function", () => {
  describe("should invoke", () => {
    describe("the createAntagonisticComponent function", () => {
      test("when the client connects as an ANTAGONIST", () => {
        handleConnectOrder({
          componentIndex: {
            byEntityId: {},
            byComponentId: {},
            custom: {},
          },
          order: {
            name: CONNECT,
            id: createUuid(),
            entityId: createUuid(),
            timestamp: Date.now(),
            role: ANTAGONIST,
          },
        });

        expect(mockCreateAntagonisticComponent).toHaveBeenCalled();
      });
    });

    describe("the createProtagonisticComponent function", () => {
      test("when the client connects as an ANTAGONIST", () => {
        handleConnectOrder({
          componentIndex: {
            byEntityId: {},
            byComponentId: {},
            custom: {},
          },
          order: {
            name: CONNECT,
            id: createUuid(),
            entityId: createUuid(),
            timestamp: Date.now(),
            role: PROTAGONIST,
          },
        });

        expect(mockCreateProtagonisticComponent).toHaveBeenCalled();
      });
    });
  });

  describe("should throw", () => {
    test("when the client connects as an ANTAGONIST", () => {
      expect(() => {
        handleConnectOrder({
          componentIndex: {
            byEntityId: {},
            byComponentId: {},
            custom: {},
          },
          order: {
            name: CONNECT,
            id: createUuid(),
            entityId: createUuid(),
            timestamp: Date.now(),
            // @ts-expect-error
            role: "foo",
          },
        });
      }).toThrowError();
    });
  });
});
