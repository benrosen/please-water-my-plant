import { Colored } from "../colored";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { updateComponent } from "./update-component";

describe("The updateComponent function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            bar: { entityId: "foo", id: "bar", color: "foreground" },
          },
          byEntityId: {
            foo: ["bar"],
          },
        },
        component: {
          entityId: "foo",
          id: "bar",
          color: "background",
        },
      },
      {
        byComponentId: {
          bar: {
            entityId: "foo",
            id: "bar",
            color: "background",
          },
        },
        byEntityId: {
          foo: ["bar"],
        },
      },
    ],
  ] as [{ componentIndex: ComponentIndex<Component & Colored>; component: Component & Colored }, ComponentIndex<Component & Colored>][])(
    "should return the expected result",
    (validExample, expectedResult) => {
      const result = updateComponent(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
