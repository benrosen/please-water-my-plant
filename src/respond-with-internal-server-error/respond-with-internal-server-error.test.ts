import { Response } from "express";
import { InternalServerErrorStatusCode } from "../internal-server-error-status-code";
import { respondWithInternalServerError } from "./respond-with-internal-server-error";

const mockSend = jest.fn();

const mockStatus = jest.fn();

const mockResponse = {
  send: mockSend,
  status: mockStatus,
} as unknown as Response;

describe("The respondWithInternalServerError function", () => {
  respondWithInternalServerError({ response: mockResponse });

  it("should call response.status with InternalServerErrorStatusCode", () => {
    expect(mockStatus).toHaveBeenCalledWith(InternalServerErrorStatusCode);
  });

  it("should call response.send", () => {
    expect(mockSend).toHaveBeenCalled();
  });
});
