import { Acceleration } from "../acceleration";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { Kinematic } from "../kinematic";
import { Uuid } from "../uuid";
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
  ] as [{ acceleration: Acceleration; componentIndex: ComponentIndex<Kinematic & Component>; componentIds: Uuid[] }, ComponentIndex<Kinematic & Component>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = accelerate(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
