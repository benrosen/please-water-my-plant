import { isComponentIndex } from "./is-component-index";

describe("The isComponentIndex function", () => {
  describe("should return true", () => {
    test.each([
      {
        byComponentId: {
          ["7d1e8ee0-3310-44db-9c8c-9a9556a30bca"]: {
            id: "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
            entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
          },
        },
        byEntityId: {
          ["2c2a0e29-98c5-43b1-a452-91eca64a8ba8"]: {
            id: "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
            entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
          },
        },
      },
    ])("when the given value, %j, is a valid component index", (validValue) => {
      expect(isComponentIndex(validValue)).toBeTruthy();
    });
  });

  describe("should return false", () => {
    test.each([false])(
      "when the given value, %j, is not a valid component index",
      (invalidValue) => {
        expect(isComponentIndex(invalidValue)).toBeFalsy();
      }
    );
  });
});
