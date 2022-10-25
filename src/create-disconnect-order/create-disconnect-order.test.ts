import { createDisconnectOrder } from "./create-disconnect-order";

describe("The createDisconnectOrder function", () => {
  test.each([
    [{}, {}],
    [{}, {}],
  ] as [Parameters<typeof createDisconnectOrder>[0], ReturnType<typeof createDisconnectOrder>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createDisconnectOrder(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
