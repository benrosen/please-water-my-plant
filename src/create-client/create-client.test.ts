/** @jest-environment jsdom */

import { OrderResourcePath } from "order-resource-path";
import { createClient } from "./create-client";
import resetAllMocks = jest.resetAllMocks;

const defaultFetch: typeof fetch = window.fetch;

const mockFetch = jest.fn();

window.fetch = mockFetch;

beforeEach(() => {
  resetAllMocks();
});

afterAll(() => {
  window.fetch = defaultFetch;
});

describe("The createClient function", () => {
  describe("should create", () => {
    describe("a new event source", () => {
      describe("that", () => {
        describe("should call the handleOnComponentsChanged callback", () => {
          test.todo("when the event source emits an onmessage event");
        });
      });
    });
  });
  describe("should return", () => {
    describe("a function", () => {
      describe("that", () => {
        describe("should call the fetch function", function () {
          test("with the post order url", () => {
            const postOrder = createClient({
              handleOnComponentsChanged: jest.fn(),
            });

            postOrder({
              id: "9859010B-21B5-4AE8-A374-19AA5E371DC6",
              entityId: "6BFF39DC-F7D5-4244-805E-95160083AEB3",
              timestamp: 0,
            });

            expect(mockFetch).toHaveBeenCalledWith(
              OrderResourcePath,
              expect.anything()
            );
          });

          test("with the method set to POST", () => {
            const postOrder = createClient({
              handleOnComponentsChanged: jest.fn(),
            });

            postOrder({
              id: "9859010B-21B5-4AE8-A374-19AA5E371DC6",
              entityId: "6BFF39DC-F7D5-4244-805E-95160083AEB3",
              timestamp: 0,
            });

            expect(mockFetch).toHaveBeenCalledWith(
              expect.anything(),
              expect.objectContaining({
                method: "POST",
              })
            );
          });

          describe("with the header", () => {
            describe("Content-Type", () => {
              test("set to application/json", () => {
                const postOrder = createClient({
                  handleOnComponentsChanged: jest.fn(),
                });

                postOrder({
                  id: "9859010B-21B5-4AE8-A374-19AA5E371DC6",
                  entityId: "6BFF39DC-F7D5-4244-805E-95160083AEB3",
                  timestamp: 0,
                });

                expect(mockFetch).toHaveBeenCalledWith(
                  expect.anything(),
                  expect.objectContaining({
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                );
              });
            });
          });
        });
      });
    });
  });
});
