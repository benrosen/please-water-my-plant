import { AffectedByGravity } from "affected-by-gravity";
import { Component } from "component";
import { ComponentIndex } from "component-index";
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
    [
      {
        componentIndex: {
          byComponentId: {
            "B12D2372-9CB3-4E5B-834D-D85B81C18707": {
              entityId: "4698D1BB-3038-4FE2-9BA6-31899C003D4C",
              id: "B12D2372-9CB3-4E5B-834D-D85B81C18707",
              acceleration: { x: 0, y: 0 },
              affectedByGravity: true,
              velocity: { x: 3.2, y: 10 },
            },
          },
          byEntityId: {
            "4698D1BB-3038-4FE2-9BA6-31899C003D4C": [
              "B12D2372-9CB3-4E5B-834D-D85B81C18707",
            ],
          },
          custom: {
            isAffectedByGravity: ["B12D2372-9CB3-4E5B-834D-D85B81C18707"],
          },
        },
      },
      {
        byComponentId: {
          "B12D2372-9CB3-4E5B-834D-D85B81C18707": {
            entityId: "4698D1BB-3038-4FE2-9BA6-31899C003D4C",
            id: "B12D2372-9CB3-4E5B-834D-D85B81C18707",
            acceleration: { x: 0, y: 0 },
            affectedByGravity: true,
            velocity: { x: 3.2, y: 0.2 },
          },
        },
        byEntityId: {
          "4698D1BB-3038-4FE2-9BA6-31899C003D4C": [
            "B12D2372-9CB3-4E5B-834D-D85B81C18707",
          ],
        },
        custom: {
          isAffectedByGravity: ["B12D2372-9CB3-4E5B-834D-D85B81C18707"],
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
