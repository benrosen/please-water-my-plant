import { parseOrderFromRequest } from "./parse-order-from-request";

describe("The parseOrderFromRequest function", () => {
  test.each([
    [
      {
        request: {
          body: {
            id: "foo",
            entityId: "bar",
            timestamp: 0,
          },
        },
      },
      {
        id: "foo",
        entityId: "bar",
        timestamp: 0,
      },
    ],
    [
      {
        request: {
          body: {},
        },
      },
      undefined,
    ],
  ] as [Parameters<typeof parseOrderFromRequest>[0], ReturnType<typeof parseOrderFromRequest>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = parseOrderFromRequest(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
