import { Response } from "express";
import { configureClientRetryInterval } from "./configure-client-retry-interval";

const mockWrite = jest.fn();

const mockResponse = {
  write: mockWrite,
} as unknown as Response;

describe("The configureClientRetryInterval function", () => {
  it("should call response.write", function () {
    configureClientRetryInterval({
      response: mockResponse,
    });

    expect(mockWrite).toHaveBeenCalled();
  });
});
