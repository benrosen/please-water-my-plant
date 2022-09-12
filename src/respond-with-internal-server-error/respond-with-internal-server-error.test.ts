import { Response } from "express";
import { InternalServerErrorStatusCode } from "../internal-server-error-status-code";
import { respondWithStatusCode } from "../respond-with-status-code";
import { respondWithInternalServerError } from "./respond-with-internal-server-error";

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
    respondWithInternalServerError({ response: mockResponse });

    expect(mockRespondWithStatusCode).toHaveBeenCalledWith({
      response: mockResponse,
      statusCode: InternalServerErrorStatusCode,
    });
  });
});
