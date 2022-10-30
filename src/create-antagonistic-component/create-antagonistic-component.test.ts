import { ANTAGONIST } from "antagonist";
import { getIndexers } from "get-indexers";
import { createUuid } from "uuid";
import { createAntagonisticComponent } from "./create-antagonistic-component";

jest.mock("get-indexers");

const mockGetIndexers = jest.mocked(getIndexers);

mockGetIndexers.mockReturnValue([]);

jest.mock("uuid");

const mockCreateUuid = jest.mocked(createUuid);

mockCreateUuid.mockReturnValue("9e45ac88-4a1e-4c88-9f73-7a2966029182");

describe("The createAntagonisticComponent function", () => {
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
            role: ANTAGONIST,
          },
        },
        byEntityId: {
          [createUuid()]: [createUuid()],
        },
      },
    ],
  ] as [Parameters<typeof createAntagonisticComponent>[0], ReturnType<typeof createAntagonisticComponent>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createAntagonisticComponent(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
