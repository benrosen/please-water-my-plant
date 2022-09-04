import { Colored } from "../colored";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { Name } from "../name";
import { getComponentsByCustomIndex } from "./get-components-by-custom-index";

describe("The getComponentsByCustomIndex function", () => {
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
          custom: {
            isForegroundColored: ["bar"],
          },
        },
        indexName: "isForegroundColored",
      },
      [
        {
          entityId: "foo",
          id: "bar",
          color: "foreground",
        },
      ],
    ],
  ] as [{ componentIndex: ComponentIndex<Component & Colored>; indexName: Name }, (Component & Colored)[]][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getComponentsByCustomIndex(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
