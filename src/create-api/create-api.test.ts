import { configureGetComponentsEndpoint } from "../configure-get-components-endpoint";
import { configurePostOrderEndpoint } from "../configure-post-order-endpoint";
import { createApi } from "./create-api";

jest.mock("../configure-get-components-endpoint", () => {
  return {
    ...jest.requireActual("../configure-get-components-endpoint"),
    configureGetComponentsEndpoint: jest.fn(),
  };
});

const mockConfigureGetComponentsEndpoint = jest.mocked(
  configureGetComponentsEndpoint
);

jest.mock("../configure-post-order-endpoint", () => {
  return {
    ...jest.requireActual("../configure-post-order-endpoint"),
    configurePostOrderEndpoint: jest.fn(),
  };
});

const mockConfigurePostOrderEndpoint = jest.mocked(configurePostOrderEndpoint);

const mockOnOrderPosted = jest.fn();

const mockRegisterOnComponentsChangedHandler = jest.fn();

const mockProps = {
  onOrderPosted: mockOnOrderPosted,
  registerOnComponentsChangedHandler: mockRegisterOnComponentsChangedHandler,
};

describe("The createApi function", () => {
  describe("should use the expected arguments to invoke", () => {
    test("configureGetComponentEndpoint", () => {
      createApi(mockProps);

      expect(mockConfigureGetComponentsEndpoint).toHaveBeenCalled();
    });

    test("configurePostOrderEndpoint", () => {
      createApi(mockProps);

      expect(mockConfigurePostOrderEndpoint).toHaveBeenCalled();
    });
  });

  describe("should throw an error", () => {
    test("when configureGetComponentEndpoint throws an error.", () => {
      mockConfigureGetComponentsEndpoint.mockImplementationOnce(() => {
        throw new Error();
      });

      expect(() => {
        createApi(mockProps);
      }).toThrowError();
    });

    test("when configurePostOrderEndpoint throw an error.", () => {
      mockConfigurePostOrderEndpoint.mockImplementationOnce(() => {
        throw new Error();
      });

      expect(() => {
        createApi(mockProps);
      }).toThrowError();
    });
  });
});
