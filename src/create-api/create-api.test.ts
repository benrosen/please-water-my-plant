import * as EventSource from "eventsource";
import * as createApiTestHarness from "supertest";
import { ACCEPTED_STATUS_CODE } from "../accepted-status-code";
import { BadRequestErrorStatusCode } from "../bad-request-error-status-code";
import { Component } from "../component";
import { ComponentsResourcePath } from "../components-resource-path";
import { INTERNAL_SERVER_ERROR_STATUS_CODE } from "../internal-server-error-status-code";
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
              describe(ACCEPTED_STATUS_CODE, () => {
                test.each([
                  {
                    id: "5F6461B8-B322-4AA4-8AA4-05BCA0E501B2",
                    entityId: "C606CEAD-287D-4FA1-81F5-531A36BF93C5",
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
                      ACCEPTED_STATUS_CODE
                    );
                  }
                );
              });

              describe(BadRequestErrorStatusCode, () => {
                test.each([
                  "5F6461B8-B322-4AA4-8AA4-05BCA0E501B2",
                  { id: 123 },
                  {
                    id: "5F6461B8-B322-4AA4-8AA4-05BCA0E501B2",
                    entityId: "C606CEAD-287D-4FA1-81F5-531A36BF93C5",
                  },
                  {
                    id: "5F6461B8-B322-4AA4-8AA4-05BCA0E501B2",
                    entityId: "C606CEAD-287D-4FA1-81F5-531A36BF93C5",
                    timestamp: "baz",
                  },
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

              describe(INTERNAL_SERVER_ERROR_STATUS_CODE, () => {
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
                    id: "5F6461B8-B322-4AA4-8AA4-05BCA0E501B2",
                    entityId: "C606CEAD-287D-4FA1-81F5-531A36BF93C5",
                    timestamp: 0,
                  };

                  const postOrderResponse = await postOrderRequest.send(order);

                  expect(postOrderResponse.statusCode).toStrictEqual(
                    INTERNAL_SERVER_ERROR_STATUS_CODE
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

                  const components: Component[] = [
                    {
                      id: "5F6461B8-B322-4AA4-8AA4-05BCA0E501B2",
                      entityId: "C606CEAD-287D-4FA1-81F5-531A36BF93C5",
                    },
                  ];

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

            describe("should deregister an event handler", () => {
              test("after a client disconnects", (done) => {
                const mockDeregisterFunction = jest.fn();

                const api = createApi({
                  onOrderPosted: mockOnOrderPosted,
                  registerOnComponentsChangedHandler: () => {
                    return mockDeregisterFunction;
                  },
                });

                const apiTestHarness = createApiTestHarness(api);

                const componentsEndpointTestHarness = apiTestHarness.get(
                  ComponentsResourcePath
                );

                const eventSource = new EventSource(
                  componentsEndpointTestHarness.url
                );

                eventSource.onopen = async () => {
                  expect(mockDeregisterFunction).not.toHaveBeenCalled();

                  eventSource.close();

                  await new Promise((resolve) => setTimeout(resolve, 1000));

                  expect(mockDeregisterFunction).toHaveBeenCalled();

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
