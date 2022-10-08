import { AffectedByGravity } from "affected-by-gravity";
import { Component } from "component";
import { ComponentIndex } from "component-index";
import { getComponentsAffectedByGravity } from "get-components-affected-by-gravity";

describe("The getComponentsAffectedByGravity function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            "1EC36527-9F33-415D-A375-2288D6F5DBC0": {
              entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
              id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
              acceleration: { x: 0, y: 0 },
              affectedByGravity: true,
              velocity: { x: 0, y: 0 },
            },
          },
          byEntityId: {
            "08D73E55-F54E-49D6-AD3D-17511A203519": [
              "1EC36527-9F33-415D-A375-2288D6F5DBC0",
            ],
          },
          custom: {
            isAffectedByGravity: ["1EC36527-9F33-415D-A375-2288D6F5DBC0"],
          },
        },
      },
      [
        {
          entityId: "08D73E55-F54E-49D6-AD3D-17511A203519",
          id: "1EC36527-9F33-415D-A375-2288D6F5DBC0",
          acceleration: { x: 0, y: 0 },
          affectedByGravity: true,
          velocity: { x: 0, y: 0 },
        },
      ],
    ],
  ] as [{ componentIndex: ComponentIndex<Component & AffectedByGravity> }, (Component & AffectedByGravity)[]][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getComponentsAffectedByGravity(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
