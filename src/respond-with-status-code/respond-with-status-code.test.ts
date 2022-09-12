import { Response } from "express";
import { respondWithStatusCode } from "./respond-with-status-code";

const mockSend = jest.fn();

const mockStatus = jest.fn();

const mockResponse = {
  send: mockSend,
  status: mockStatus,
} as unknown as Response;

const mockStatusCode = 123;

describe("The respondWithStatusCode function", () => {
  respondWithStatusCode({
    response: mockResponse,
    statusCode: mockStatusCode,
  });

  it("should call response.status with InternalServerErrorStatusCode", () => {
    expect(mockStatus).toHaveBeenCalledWith(mockStatusCode);
  });

  it("should call response.send", () => {
    expect(mockSend).toHaveBeenCalled();
  });
});
