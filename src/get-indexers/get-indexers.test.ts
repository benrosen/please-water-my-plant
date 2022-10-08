import { getIndexers } from "get-indexers";

describe("The getIndexers function", () => {
  it("should return an array", () => {
    const result = getIndexers();

    expect(Array.isArray(result)).toBe(true);
  });
});
