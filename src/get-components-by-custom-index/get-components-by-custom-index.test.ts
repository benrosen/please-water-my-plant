import { Colored } from "colored";
import { Component } from "component";
import { ComponentIndex } from "component-index";
import { getComponentsByCustomIndex } from "get-components-by-custom-index";
import { Name } from "name";

describe("The getComponentsByCustomIndex function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            "983C7162-0CF2-4CAD-8526-0A8ED3758E2A": {
              entityId: "EC6F9C6F-C658-40BA-AC0C-33CE603B6C6D",
              id: "983C7162-0CF2-4CAD-8526-0A8ED3758E2A",
              color: "foreground",
            },
          },
          byEntityId: {
            "EC6F9C6F-C658-40BA-AC0C-33CE603B6C6D": [
              "983C7162-0CF2-4CAD-8526-0A8ED3758E2A",
            ],
          },
          custom: {
            isForegroundColored: ["983C7162-0CF2-4CAD-8526-0A8ED3758E2A"],
          },
        },
        indexName: "isForegroundColored",
      },
      [
        {
          entityId: "EC6F9C6F-C658-40BA-AC0C-33CE603B6C6D",
          id: "983C7162-0CF2-4CAD-8526-0A8ED3758E2A",
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
