import { Response } from "express";
import { configureServerSentEventsResponse } from "../configure-server-sent-events-response";
import { respondWithComponentUpdates } from "./respond-with-component-updates";

jest.mock("../configure-server-sent-events-response", () => {
  return {
    ...jest.requireActual("../configure-server-sent-events-response"),
    configureServerSentEventsResponse: jest.fn(),
  };
});

const mockConfigureServerSentEventsResponse = jest.mocked(
  configureServerSentEventsResponse
);

describe("The respondWithComponentUpdates function", () => {
  it("should call configureServerSentEventsResponse", () => {
    respondWithComponentUpdates({
      registerOnComponentsChangedHandler: jest.fn(),
      response: {} as unknown as Response,
    });

    expect(mockConfigureServerSentEventsResponse).toHaveBeenCalled();
  });

  it("should throw an error when configureServerSentEventsResponse throws an error", function () {
    mockConfigureServerSentEventsResponse.mockImplementationOnce(() => {
      throw new Error();
    });

    expect(() => {
      respondWithComponentUpdates({
        registerOnComponentsChangedHandler: jest.fn(),
        response: {} as unknown as Response,
      });
    }).toThrowError();
  });
});
