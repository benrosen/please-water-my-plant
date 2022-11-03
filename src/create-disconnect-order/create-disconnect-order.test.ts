import { createTimestamp } from "create-timestamp";
import { DISCONNECT } from "disconnect";
import { createUuid } from "uuid";
import { createDisconnectOrder } from "./create-disconnect-order";

const mockUuid = "9e45ac88-4a1e-4c88-9f73-7a2966029182";

jest.mock("uuid");

const mockCreateUuid = jest.mocked(createUuid);

mockCreateUuid.mockReturnValue(mockUuid);

const mockTimestamp = Date.now();

jest.mock("create-timestamp");

const mockCreateTimestamp = jest.mocked(createTimestamp);

mockCreateTimestamp.mockReturnValue(mockTimestamp);

describe("The createDisconnectOrder function", () => {
  test.each([
    [
      {
        entityId: "13d20d0e-f9fa-4e82-a65b-794a31382795",
      },
      {
        id: mockUuid,
        entityId: "13d20d0e-f9fa-4e82-a65b-794a31382795",
        name: DISCONNECT,
        timestamp: mockTimestamp,
      },
    ],
  ] as [Parameters<typeof createDisconnectOrder>[0], ReturnType<typeof createDisconnectOrder>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createDisconnectOrder(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
