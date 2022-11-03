import { ANTAGONIST } from "antagonist";
import { CONNECT } from "connect";
import { createTimestamp } from "create-timestamp";
import { createUuid } from "uuid";
import { createConnectOrder } from "./create-connect-order";

const mockUuid = "9e45ac88-4a1e-4c88-9f73-7a2966029182";

jest.mock("uuid");

const mockCreateUuid = jest.mocked(createUuid);

mockCreateUuid.mockReturnValue(mockUuid);

const mockTimestamp = Date.now();

jest.mock("create-timestamp");

const mockCreateTimestamp = jest.mocked(createTimestamp);

mockCreateTimestamp.mockReturnValue(mockTimestamp);

describe("The createConnectOrder function", () => {
  test.each([
    [
      {
        entityId: "13d20d0e-f9fa-4e82-a65b-794a31382795",
        role: ANTAGONIST,
      },
      {
        id: mockUuid,
        entityId: "13d20d0e-f9fa-4e82-a65b-794a31382795",
        name: CONNECT,
        role: ANTAGONIST,
        timestamp: mockTimestamp,
      },
    ],
  ] as [Parameters<typeof createConnectOrder>[0], ReturnType<typeof createConnectOrder>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createConnectOrder(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
