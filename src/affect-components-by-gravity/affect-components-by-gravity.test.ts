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
            bar: {
              entityId: "foo",
              id: "bar",
              acceleration: { x: 0, y: 0 },
              affectedByGravity: true,
              velocity: { x: 0, y: 0 },
            },
          },
          byEntityId: { foo: ["bar"] },
          custom: {
            isAffectedByGravity: ["bar"],
          },
        },
      },
      {
        byComponentId: {
          bar: {
            entityId: "foo",
            id: "bar",
            acceleration: { x: 0, y: 0 },
            affectedByGravity: true,
            velocity: { x: 0, y: -9.8 },
          },
        },
        byEntityId: { foo: ["bar"] },
        custom: {
          isAffectedByGravity: ["bar"],
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
