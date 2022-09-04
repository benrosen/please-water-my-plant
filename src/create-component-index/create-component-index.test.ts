import { Colored } from "../colored";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { ComponentIndexer } from "../component-indexer";
import { Name } from "../name";
import { createComponentIndex } from "./create-component-index";

describe("The createComponentIndex function", () => {
  test.each([
    [
      [
        { entityId: "foo", id: "bar" },
        { entityId: "foo", id: "baz" },
      ],
      [],
      {
        byComponentId: {
          bar: { entityId: "foo", id: "bar" },
          baz: { entityId: "foo", id: "baz" },
        },
        byEntityId: {
          foo: ["bar", "baz"],
        },
      },
    ],
    [
      [
        { entityId: "foo", id: "foo", color: "foreground" },
        { entityId: "bar", id: "bar", color: "background" },
        { entityId: "baz", id: "baz", color: "foreground" },
      ],
      [
        [
          "isForegroundColored",
          (component: Component) => {
            return component["color"] === "foreground";
          },
        ],
      ],
      {
        byComponentId: {
          foo: { entityId: "foo", id: "foo", color: "foreground" },
          bar: { entityId: "bar", id: "bar", color: "background" },
          baz: { entityId: "baz", id: "baz", color: "foreground" },
        },
        byEntityId: {
          foo: ["foo"],
          bar: ["bar"],
          baz: ["baz"],
        },
        custom: {
          isForegroundColored: ["foo", "baz"],
        },
      },
    ],
  ] as [(Component & Colored)[], [Name, ComponentIndexer][], ComponentIndex<Component & Colored>][])(
    "should return the expected result",
    (components, indexers, expectedComponentIndex) => {
      const result = createComponentIndex({ components });
      expect(result).toStrictEqual(expectedComponentIndex);
    }
  );
});
