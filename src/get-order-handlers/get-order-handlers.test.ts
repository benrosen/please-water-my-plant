import { getOrderHandlers } from "./get-order-handlers";

describe("The getOrderHandlers function", () => {
  it("should return an array of functions", function () {
    const result = getOrderHandlers();

    expect(Array.isArray(result)).toStrictEqual(true);
  });
});
