import { Response } from "express";
import { INTERNAL_SERVER_ERROR_STATUS_CODE } from "internal-server-error-status-code";
import { respondWithInternalServerError } from "respond-with-internal-server-error";
import { respondWithStatusCode } from "respond-with-status-code";

const mockSend = jest.fn();

const mockStatus = jest.fn();

const mockResponse = {
  send: mockSend,
  status: mockStatus,
} as unknown as Response;

jest.mock("respond-with-status-code", () => {
  return {
    ...jest.requireActual("respond-with-status-code"),
    respondWithStatusCode: jest.fn(),
  };
});

const mockRespondWithStatusCode = jest.mocked(respondWithStatusCode);

describe("The respondWithInternalServerError function", () => {
  it("should call respondWithStatusCode with the provided Response and InternalServerError", () => {
    respondWithInternalServerError({ response: mockResponse });

    expect(mockRespondWithStatusCode).toHaveBeenCalledWith({
      response: mockResponse,
      statusCode: INTERNAL_SERVER_ERROR_STATUS_CODE,
    });
  });
});
