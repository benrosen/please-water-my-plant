import { Acceleration } from "../acceleration";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { Guid } from "../guid";
import { Kinematic } from "../kinematic";
import { accelerate } from "./accelerate";

describe("The accelerate function", () => {
  test.each([
    [
      {
        acceleration: { x: 1, y: 1 },
        componentIndex: {
          byComponentId: {
            bar: {
              entityId: "foo",
              id: "bar",
              velocity: { x: 0, y: 0 },
              acceleration: { x: 0, y: 0 },
            },
          },
          byEntityId: {
            foo: ["bar"],
          },
        },
        componentIds: ["bar"],
      },
      {
        byComponentId: {
          bar: {
            entityId: "foo",
            id: "bar",
            velocity: { x: 1, y: 1 },
            acceleration: { x: 0, y: 0 },
          },
        },
        byEntityId: { foo: ["bar"] },
      },
    ],
  ] as [{ acceleration: Acceleration; componentIndex: ComponentIndex<Kinematic & Component>; componentIds: Guid[] }, ComponentIndex<Kinematic & Component>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = accelerate(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
