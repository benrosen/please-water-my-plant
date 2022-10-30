import { getIndexers } from "get-indexers";
import { PROTAGONIST } from "protagonist";
import { createUuid } from "uuid";
import { createProtagonisticComponent } from "./create-protagonistic-component";

jest.mock("get-indexers");

const mockGetIndexers = jest.mocked(getIndexers);

mockGetIndexers.mockReturnValue([]);

jest.mock("uuid");

const mockCreateUuid = jest.mocked(createUuid);

mockCreateUuid.mockReturnValue("9e45ac88-4a1e-4c88-9f73-7a2966029182");

describe("The createProtagonisticComponent function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {},
          byEntityId: {},
        },
        entityId: createUuid(),
      },
      {
        byComponentId: {
          [createUuid()]: {
            id: createUuid(),
            entityId: createUuid(),
            role: PROTAGONIST,
          },
        },
        byEntityId: {
          [createUuid()]: [createUuid()],
        },
      },
    ],
  ] as [Parameters<typeof createProtagonisticComponent>[0], ReturnType<typeof createProtagonisticComponent>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createProtagonisticComponent(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
