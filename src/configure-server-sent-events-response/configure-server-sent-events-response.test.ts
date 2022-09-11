import { Response } from "express";
import { configureClientRetryInterval } from "../configure-client-retry-interval";
import { setAndFlushServerSentEventHeaders } from "../set-and-flush-server-sent-event-headers";
import { configureServerSentEventsResponse } from "./configure-server-sent-events-response";

jest.mock("../set-and-flush-server-sent-event-headers", () => {
  return {
    ...jest.requireActual("../set-and-flush-server-sent-event-headers"),
    setAndFlushServerSentEventHeaders: jest.fn(),
  };
});

const mockSetAndFlushServerSentEventHeaders = jest.mocked(
  setAndFlushServerSentEventHeaders
);

jest.mock("../configure-client-retry-interval", () => {
  return {
    ...jest.requireActual("../configure-client-retry-interval"),
    configureClientRetryInterval: jest.fn(),
  };
});

const mockConfigureClientRetryInterval = jest.mocked(
  configureClientRetryInterval
);

const mockRegisterSendEventCallback = jest.fn();

describe("The configureServerSentEventsResponse function", () => {
  describe("should use the provided response to call", function () {
    const mockResponse = {} as Response;

    configureServerSentEventsResponse({
      registerSendEventCallback: mockRegisterSendEventCallback,
      response: mockResponse,
    });

    test("setAndFlushServerSentEventHeaders", () => {
      expect(mockSetAndFlushServerSentEventHeaders).toHaveBeenCalledWith({
        response: mockResponse,
      });
    });

    test("configureClientRetryInterval", () => {
      expect(mockConfigureClientRetryInterval).toHaveBeenCalledWith({
        response: mockResponse,
      });
    });
  });

  it("should call params.registerSendEventCallback", () => {
    configureServerSentEventsResponse({
      registerSendEventCallback: mockRegisterSendEventCallback,
      response: {} as Response,
    });

    expect(mockRegisterSendEventCallback).toHaveBeenCalled();
  });
});
