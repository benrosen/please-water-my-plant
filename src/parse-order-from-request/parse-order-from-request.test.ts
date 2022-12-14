import { CONNECT } from "connect";
import { parseOrderFromRequest } from "parse-order-from-request";

describe("The parseOrderFromRequest function", () => {
  test.each([
    [
      {
        body: {
          id: "2515934A-F479-4785-8760-62366BD5CB13",
          entityId: "213C4A66-8C0F-4CDA-A684-3FD967A5DF5A",
          timestamp: 0,
          name: CONNECT,
        },
      },
      {
        id: "2515934A-F479-4785-8760-62366BD5CB13",
        entityId: "213C4A66-8C0F-4CDA-A684-3FD967A5DF5A",
        timestamp: 0,
        name: CONNECT,
      },
    ],
  ] as [Parameters<typeof parseOrderFromRequest>[0], ReturnType<typeof parseOrderFromRequest>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = parseOrderFromRequest(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
