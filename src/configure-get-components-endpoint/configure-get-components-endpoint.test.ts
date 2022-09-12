import { Express } from "express";
import { ComponentsResourcePath } from "../components-resource-path";
import { configureGetComponentsEndpoint } from "./configure-get-components-endpoint";

const mockGet = jest.fn();

const mockServer = {
  get: mockGet,
} as unknown as Express;

describe("The configureGetComponentsEndpoint function", () => {
  it("should call server.get with ComponentsResourcePath", () => {
    configureGetComponentsEndpoint({
      registerOnComponentsChangedHandler: jest.fn(),
      server: mockServer,
    });

    expect(mockGet).toBeCalledWith(
      ComponentsResourcePath,
      expect.any(Function)
    );
  });

  describe("should throw an error", function () {
    test("when server.get throws an error", () => {
      mockGet.mockImplementationOnce(() => {
        throw new Error();
      });

      expect(() => {
        configureGetComponentsEndpoint({
          registerOnComponentsChangedHandler: jest.fn(),
          server: mockServer,
        });
      }).toThrowError();
    });
  });
});
