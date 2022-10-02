import * as EventSource from "eventsource";
import * as createApiTestHarness from "supertest";
import { Component } from "../component";
import { ComponentsResourcePath } from "../components-resource-path";
import { createServer } from "./create-server";

describe("The createServer function", () => {
  describe("should return a server", () => {
    describe("that", () => {
      describe("should have an endpoint named `/components`", () => {
        describe("that", () => {
          describe("should emit the expected series of events in one second", () => {
            test.each<
              { expectedComponentUpdates: Component[][] } | jest.DoneCallback
            >([
              {
                expectedComponentUpdates: [
                  [
                    {
                      entityId: "D9CE2A14-89A3-4C6B-8E34-1810FF366E23",
                      id: "E17EA1AB-4FFB-45AF-BE3E-9257F614080E",
                    },
                  ],
                ],
              },
              {
                expectedComponentUpdates: [
                  [
                    {
                      entityId: "D9CE2A14-89A3-4C6B-8E34-1810FF366E23",
                      id: "E17EA1AB-4FFB-45AF-BE3E-9257F614080E",
                    },
                    {
                      entityId: "D9CE2A14-89A3-4C6B-8E34-1810FF366E23",
                      id: "E17EA1AB-4FFB-45AF-BE3E-9257F614080E",
                    },
                  ],
                  [
                    {
                      entityId: "D9CE2A14-89A3-4C6B-8E34-1810FF366E23",
                      id: "E17EA1AB-4FFB-45AF-BE3E-9257F614080E",
                    },
                    {
                      entityId: "D9CE2A14-89A3-4C6B-8E34-1810FF366E23",
                      id: "E17EA1AB-4FFB-45AF-BE3E-9257F614080E",
                    },
                  ],
                ],
              },
            ])(
              "when no orders are posted",
              (
                {
                  expectedComponentUpdates,
                }: { expectedComponentUpdates: Component[][] },
                done: jest.DoneCallback
              ) => {
                jest.useFakeTimers();

                let isClientConnected = false;

                const getExpectedComponentUpdate = (): Component[] => {
                  if (
                    isClientConnected &&
                    expectedComponentUpdates.length > 0
                  ) {
                    return expectedComponentUpdates.shift();
                  } else {
                    return [];
                  }
                };

                const server = createServer({
                  framesPerSecond: expectedComponentUpdates.length,
                  getIndexers: () => {
                    return [];
                  },
                  getNewComponents: getExpectedComponentUpdate,
                });

                const receivedComponentUpdates: Component[][] = [];

                const apiTestHarness = createApiTestHarness(server);

                const componentsEndpointTestHarness = apiTestHarness.get(
                  ComponentsResourcePath
                );

                const eventSource = new EventSource(
                  componentsEndpointTestHarness.url
                );

                eventSource.onopen = () => {
                  isClientConnected = true;

                  jest.advanceTimersByTime(1000);

                  eventSource.close();

                  expect(receivedComponentUpdates).toStrictEqual(
                    expectedComponentUpdates
                  );

                  done();
                };

                eventSource.onmessage = (event: MessageEvent) => {
                  const receivedComponentUpdate = event.data;

                  receivedComponentUpdates.push(receivedComponentUpdate);
                };
              }
            );
          });
        });
      });
    });
  });
});
