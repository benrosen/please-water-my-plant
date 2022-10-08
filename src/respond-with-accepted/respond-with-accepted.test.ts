import { ACCEPTED_STATUS_CODE } from "accepted-status-code";
import { Response } from "express";
import { respondWithAccepted } from "respond-with-accepted";
import { respondWithStatusCode } from "respond-with-status-code";

const mockSend = jest.fn();

const mockStatus = jest.fn();

const mockResponse = {
  send: mockSend,
  status: mockStatus,
} as unknown as Response;

jest.mock("../respond-with-status-code", () => {
  return {
    ...jest.requireActual("../respond-with-status-code"),
    respondWithStatusCode: jest.fn(),
  };
});

const mockRespondWithStatusCode = jest.mocked(respondWithStatusCode);

describe("The respondWithInternalServerError function", () => {
  it("should call respondWithStatusCode with the provided Response and InternalServerError", () => {
    respondWithAccepted({ response: mockResponse });

    expect(mockRespondWithStatusCode).toHaveBeenCalledWith({
      response: mockResponse,
      statusCode: ACCEPTED_STATUS_CODE,
    });
  });
});
