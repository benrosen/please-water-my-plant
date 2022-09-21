import * as EventSource from "eventsource";
import * as createApiTestHarness from "supertest";
import { AcceptedStatusCode } from "../accepted-status-code";
import { BadRequestErrorStatusCode } from "../bad-request-error-status-code";
import { Component } from "../component";
import { ComponentsResourcePath } from "../components-resource-path";
import { InternalServerErrorStatusCode } from "../internal-server-error-status-code";
import { Order } from "../order";
import { OrderResourcePath } from "../order-resource-path";
import { createApi } from "./create-api";

const mockOnOrderPosted = jest.fn();

const mockRegisterOnComponentsChangedHandler = jest.fn();

describe("The createApi function", () => {
  describe("should return an api", () => {
    describe("that", () => {
      describe("should have an endpoint named", () => {
        describe("order", () => {
          describe("that", () => {
            describe("should return", () => {
              describe(AcceptedStatusCode, () => {
                test.each([
                  {
                    id: "foo",
                    entityId: "bar",
                    timestamp: 0,
                  },
                ] as Order[])(
                  "when given a valid request: %j",
                  async (order) => {
                    const api = createApi({
                      onOrderPosted: mockOnOrderPosted,
                      registerOnComponentsChangedHandler:
                        mockRegisterOnComponentsChangedHandler,
                    });

                    const apiTestHarness = createApiTestHarness(api);

                    const postOrderRequest =
                      apiTestHarness.post(OrderResourcePath);

                    const postOrderResponse = await postOrderRequest.send(
                      order
                    );

                    expect(postOrderResponse.statusCode).toStrictEqual(
                      AcceptedStatusCode
                    );
                  }
                );
              });

              describe(BadRequestErrorStatusCode, () => {
                test.each([
                  "foo",
                  { id: 123 },
                  { id: "foo", entityId: "bar" },
                  { id: "foo", entityId: "bar", timestamp: "baz" },
                ] as (string | object)[])(
                  "when given an invalid request: %j",
                  async (invalidRequest) => {
                    const api = createApi({
                      onOrderPosted: mockOnOrderPosted,
                      registerOnComponentsChangedHandler:
                        mockRegisterOnComponentsChangedHandler,
                    });

                    const apiTestHarness = createApiTestHarness(api);

                    const postOrderRequest =
                      apiTestHarness.post(OrderResourcePath);

                    const postOrderResponse = await postOrderRequest.send(
                      invalidRequest
                    );

                    expect(postOrderResponse.statusCode).toStrictEqual(
                      BadRequestErrorStatusCode
                    );
                  }
                );
              });

              describe(InternalServerErrorStatusCode, () => {
                test("when onOrderPosted throws an error", async () => {
                  mockOnOrderPosted.mockImplementationOnce(() => {
                    throw new Error();
                  });

                  const api = createApi({
                    onOrderPosted: mockOnOrderPosted,
                    registerOnComponentsChangedHandler:
                      mockRegisterOnComponentsChangedHandler,
                  });

                  const apiTestHarness = createApiTestHarness(api);

                  const postOrderRequest =
                    apiTestHarness.post(OrderResourcePath);

                  const order: Order = {
                    id: "foo",
                    entityId: "bar",
                    timestamp: 0,
                  };

                  const postOrderResponse = await postOrderRequest.send(order);

                  expect(postOrderResponse.statusCode).toStrictEqual(
                    InternalServerErrorStatusCode
                  );
                });
              });
            });
          });
        });

        describe("components", () => {
          describe("that", () => {
            describe("should return", () => {
              describe("a serialized array of components", () => {
                test("when the handleOnComponentsChanged callback function is invoked", (done) => {
                  let onComponentsChanged: (components: Component[]) => void;

                  const api = createApi({
                    onOrderPosted: mockOnOrderPosted,
                    registerOnComponentsChangedHandler: (
                      handleOnComponentsChanged
                    ) => {
                      onComponentsChanged = handleOnComponentsChanged;
                      return jest.fn();
                    },
                  });

                  const apiTestHarness = createApiTestHarness(api);

                  const componentsEndpointTestHarness = apiTestHarness.get(
                    ComponentsResourcePath
                  );

                  const eventSource = new EventSource(
                    componentsEndpointTestHarness.url
                  );

                  const components = [{ id: "foo", entityId: "bar" }];

                  eventSource.onopen = () => {
                    onComponentsChanged(components);
                  };

                  eventSource.onmessage = (event: MessageEvent) => {
                    expect(JSON.parse(event.data)).toStrictEqual(components);

                    eventSource.close();

                    done();
                  };
                });
              });
            });
          });
        });
      });
    });
  });
});
