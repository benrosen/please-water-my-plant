import { Response } from "express";
import { createServerSentEvent } from "./create-server-sent-event";

describe("The createServerSentEvent function", () => {
  it("should write the expected value to the provided response object", () => {
    const mockWrite = jest.fn();

    const mockResponseObject = {
      write: mockWrite,
    };

    const mockPayload = {
      value: "foo",
    };

    const serializedMockPayload = JSON.stringify(mockPayload);

    createServerSentEvent({
      payload: mockPayload,
      response: mockResponseObject as unknown as Response,
    });

    expect(mockWrite).toHaveBeenCalledWith(serializedMockPayload);
  });
});
