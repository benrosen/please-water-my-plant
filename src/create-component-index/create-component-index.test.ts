import { isAffectedByGravity } from "../affected-by-gravity";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { ComponentIndexer } from "../component-indexer";
import { createComponentIndex } from "./create-component-index";

describe("The createComponentIndex function", () => {
  test.each([
    [
      [[], []],
      {
        byComponentId: {},
        byEntityId: {},
      },
    ],
    [
      [
        [
          {
            id: "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
            entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
          },
        ],
        [],
      ],
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
    ],
    [
      [
        [
          {
            id: "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
            entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
            affectedByGravity: true,
          },
        ],
        [isAffectedByGravity],
      ],
      {
        byComponentId: {
          ["7d1e8ee0-3310-44db-9c8c-9a9556a30bca"]: {
            id: "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
            entityId: "2c2a0e29-98c5-43b1-a452-91eca64a8ba8",
            affectedByGravity: true,
          },
        },
        byEntityId: {
          ["2c2a0e29-98c5-43b1-a452-91eca64a8ba8"]: [
            "7d1e8ee0-3310-44db-9c8c-9a9556a30bca",
          ],
        },
        custom: {
          isAffectedByGravity: ["7d1e8ee0-3310-44db-9c8c-9a9556a30bca"],
        },
      },
    ],
  ] as [[Component[], ComponentIndexer[]], ComponentIndex][])(
    "should return the expected result",
    ([components, indexers], expectedComponentIndex) => {
      const result = createComponentIndex({
        components,
        indexers,
      });

      expect(result).toStrictEqual(expectedComponentIndex);
    }
  );
});
