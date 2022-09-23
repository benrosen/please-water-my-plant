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
                      entityId: "foo",
                      id: "bar",
                    },
                  ],
                ],
              },
              {
                expectedComponentUpdates: [
                  [
                    {
                      entityId: "foo",
                      id: "bar",
                    },
                    {
                      entityId: "foo",
                      id: "bar",
                    },
                  ],
                  [
                    {
                      entityId: "foo",
                      id: "bar",
                    },
                    {
                      entityId: "foo",
                      id: "bar",
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
