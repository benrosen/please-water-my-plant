import { Response } from "express";
import { ServerSentEventHeaders } from "../server-sent-event-headers";
import { setAndFlushServerSentEventHeaders } from "./set-and-flush-server-sent-event-headers";

const mockFlushHeaders = jest.fn();

const mockSet = jest.fn();

const mockResponse = {
  flushHeaders: mockFlushHeaders,
  set: mockSet,
} as unknown as Response;

describe("The setAndFlushServerSentEventHeaders function", () => {
  describe("should call", () => {
    test("response.set with ServerSentEventHeaders", () => {
      setAndFlushServerSentEventHeaders({
        response: mockResponse,
      });

      expect(mockSet).toHaveBeenCalledWith(ServerSentEventHeaders);
    });

    test("response.flushHeaders", () => {
      setAndFlushServerSentEventHeaders({
        response: mockResponse,
      });

      expect(mockFlushHeaders).toHaveBeenCalled();
    });
  });

  describe("should throw", () => {
    test("when response.set throws", () => {
      mockSet.mockImplementationOnce(() => {
        throw new Error()
      })

      expect(() => {
        setAndFlushServerSentEventHeaders({
          response: mockResponse,
        });
      }).toThrow();
    });

    test("when response.flushHeaders throws", () => {
      mockFlushHeaders.mockImplementationOnce(() => {
        throw new Error()
      })
      
      expect(() => {
        setAndFlushServerSentEventHeaders({
          response: mockResponse,
        });
      }).toThrow();
    });
  });
});
