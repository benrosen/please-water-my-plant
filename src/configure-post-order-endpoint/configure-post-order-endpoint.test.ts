import { Express } from "express";
import { OrderResourcePath } from "../order-resource-path";
import { configurePostOrderEndpoint } from "./configure-post-order-endpoint";

const mockPost = jest.fn();

const mockServer = {
  post: mockPost,
} as unknown as Express;

describe("The configurePostOrderEndpoint function", () => {
  it("should call server.post with OrderResourcePath", () => {
    configurePostOrderEndpoint({
      handlePostedOrder: jest.fn(),
      server: mockServer,
    });

    expect(mockPost).toHaveBeenCalledWith(
        OrderResourcePath,
        expect.any(Function)
    );
  });

  describe("should throw an error", function () {
    test("when server.post throws an error", function () {
      mockPost.mockImplementationOnce(() => {
        throw new Error();
      });

      expect(() => {
        configurePostOrderEndpoint({
          handlePostedOrder: jest.fn(),
          server: mockServer
        })
      }).toThrowError()
    });
  });
});
