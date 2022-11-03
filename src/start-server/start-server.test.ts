import { startServer } from "start-server";

describe("The startServer function", () => {
  it("should return a function", function () {
    const result = startServer();

    expect(typeof result).toStrictEqual("function");
  });
});
