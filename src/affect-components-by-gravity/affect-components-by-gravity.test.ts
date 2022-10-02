import { AffectedByGravity } from "../affected-by-gravity";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { affectComponentsByGravity } from "./affect-components-by-gravity";

describe("The affectComponentsByGravity function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            "E8547843-451A-4752-B1A5-D3515A8305C7": {
              entityId: "950C008D-A647-45B2-B182-C85B9AFC1755",
              id: "E8547843-451A-4752-B1A5-D3515A8305C7",
              acceleration: { x: 0, y: 0 },
              affectedByGravity: true,
              velocity: { x: 0, y: 0 },
            },
          },
          byEntityId: {
            "950C008D-A647-45B2-B182-C85B9AFC1755": [
              "E8547843-451A-4752-B1A5-D3515A8305C7",
            ],
          },
          custom: {
            isAffectedByGravity: ["E8547843-451A-4752-B1A5-D3515A8305C7"],
          },
        },
      },
      {
        byComponentId: {
          "E8547843-451A-4752-B1A5-D3515A8305C7": {
            entityId: "950C008D-A647-45B2-B182-C85B9AFC1755",
            id: "E8547843-451A-4752-B1A5-D3515A8305C7",
            acceleration: { x: 0, y: 0 },
            affectedByGravity: true,
            velocity: { x: 0, y: -9.8 },
          },
        },
        byEntityId: {
          "950C008D-A647-45B2-B182-C85B9AFC1755": [
            "E8547843-451A-4752-B1A5-D3515A8305C7",
          ],
        },
        custom: {
          isAffectedByGravity: ["E8547843-451A-4752-B1A5-D3515A8305C7"],
        },
      },
    ],
  ] as [{ componentIndex: ComponentIndex<Component & AffectedByGravity> }, ComponentIndex<Component & AffectedByGravity>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = affectComponentsByGravity(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
