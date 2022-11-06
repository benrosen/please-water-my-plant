import { getExpiredComponents } from "get-expired-components";
import { removeComponent } from "remove-component";
import { removeExpiredComponents } from "./remove-expired-components";

jest.mock("remove-component");

const mockRemoveComponent = jest.mocked(removeComponent);

jest.mock("get-expired-components");

const mockGetExpiredComponents = jest.mocked(getExpiredComponents);

const mockExpiredComponents = [];

mockGetExpiredComponents.mockReturnValue(mockExpiredComponents);

describe("The removeExpiredComponents function", () => {
  describe("should invoke the removeComponent function", function () {
    test("once for each expired component", () => {
      removeExpiredComponents({
        componentIndex: {
          byComponentId: {},
          byEntityId: {},
        },
      });

      expect(mockRemoveComponent).toHaveBeenCalledTimes(
        mockExpiredComponents.length
      );
    });
  });
});
