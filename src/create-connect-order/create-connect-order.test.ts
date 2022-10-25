import { createConnectOrder } from "./create-connect-order";

describe("The createConnectOrder function", () => {
  test.each([
    [{}, {}],
    [{}, {}],
  ] as [Parameters<typeof createConnectOrder>[0], ReturnType<typeof createConnectOrder>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createConnectOrder(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
