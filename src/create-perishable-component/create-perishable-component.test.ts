import { createTimestamp } from "create-timestamp";
import { getIndexers } from "get-indexers";
import { createUuid } from "uuid";
import { createPerishableComponent } from "./create-perishable-component";

jest.mock("get-indexers");

const mockGetIndexers = jest.mocked(getIndexers);

mockGetIndexers.mockReturnValue([]);

const mockEntityId = createUuid();

const mockComponentId = createUuid();

jest.mock("uuid");

const mockCreateUuid = jest.mocked(createUuid);

mockCreateUuid.mockReturnValue(mockComponentId);

const mockTimestamp = createTimestamp();

jest.mock("create-timestamp");

const mockCreateTimestamp = jest.mocked(createTimestamp);

mockCreateTimestamp.mockReturnValue(mockTimestamp);

const mockLifespan = 1234;

describe("The createPerishableComponent function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {},
          byEntityId: {},
        },
        entityId: mockEntityId,
        lifespan: mockLifespan,
      },
      {
        byComponentId: {
          [mockComponentId]: {
            entityId: mockEntityId,
            expiresAt: mockTimestamp + mockLifespan,
            id: mockComponentId,
          },
        },
        byEntityId: {
          [mockEntityId]: [mockComponentId],
        },
      },
    ],
  ] as [Parameters<typeof createPerishableComponent>[0], ReturnType<typeof createPerishableComponent>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createPerishableComponent(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
