import { createTimestamp } from "./create-timestamp";

describe("The createTimestamp function", () => {
  test("should return a datetime", () => {
    const result = createTimestamp();

    expect(result).not.toStrictEqual(NaN);
  });
});
