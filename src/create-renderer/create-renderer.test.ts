import { createRenderer } from "./create-renderer";

describe("The createRenderer function", () => {
  test("should return the expected result.", () => {
    const result = createRenderer();

    expect(typeof result).toStrictEqual("function");
  });
});
