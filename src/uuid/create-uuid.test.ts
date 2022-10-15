import { createUuid } from "./create-uuid";
import { isUuid } from "./is-uuid";

describe("The createUuid function", () => {
  test("should return a Uuid.", () => {
    const result = createUuid();

    expect(isUuid(result)).toStrictEqual(true);
  });
});
