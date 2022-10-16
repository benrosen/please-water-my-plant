import { build } from "esbuild";
import { createBrowserScripts } from "./create-browser-scripts"; // should call esbuild

jest.mock("esbuild", () => {
  return {
    ...jest.requireActual("esbuild"),
    build: jest.fn(),
  };
});

const mockBuild = jest.mocked(build);

describe("The createBrowserScripts function", () => {
  test("should call the build function.", () => {
    createBrowserScripts();

    expect(mockBuild).toBeCalledTimes(1);
  });
});
