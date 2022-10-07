import { ComponentIndex } from "./component-index";
import { isComponentIndex } from "./is-component-index";

const validExamples: ComponentIndex[] = [
  {
    byComponentId: {
      ["7d1e8ee0-3310-44db-9c8c-9a9556a30bca"]: {
        id: "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
        entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
      },
    },
    byEntityId: {
      ["2c2a0e29-98c5-43b1-a452-91eca64a8ba8"]: [
        "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
      ],
    },
  },
  {
    byComponentId: {
      ["7d1e8ee0-3310-44db-9c8c-9a9556a30bca"]: {
        id: "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
        entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
      },
    },
    byEntityId: {
      ["2c2a0e29-98c5-43b1-a452-91eca64a8ba8"]: [
        "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
      ],
    },
    custom: {
      foo: ["7d1e8ee0-3310-44db-9c8c-9a9556a30bca"],
    },
  },
];

const invalidExamples = [false];

describe("The isComponentIndex function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the ComponentIndex interface",
      (validValue) => {
        const result = isComponentIndex(validValue);
        expect(result).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the ComponentIndex interface",
      (invalidValue) => {
        const result = isComponentIndex(invalidValue);
        expect(result).toStrictEqual(false);
      }
    );
  });
});
