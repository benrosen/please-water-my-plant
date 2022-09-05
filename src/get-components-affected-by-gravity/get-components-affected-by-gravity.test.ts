import { AffectedByGravity } from "../affected-by-gravity";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { getComponentsAffectedByGravity } from "./get-components-affected-by-gravity";

describe("The getComponentsAffectedByGravity function", () => {
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
      [
        {
          entityId: "foo",
          id: "bar",
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
