import { Colored } from "colored";
import { Component } from "component";
import { ComponentIndex } from "component-index";
import { updateComponent } from "update-component";

describe("The updateComponent function", () => {
  test.each([
    [
      {
        componentIndex: {
          byComponentId: {
            "360D7685-F026-4B75-B814-BDEFAF18A441": {
              entityId: "752A3387-FA59-469F-8929-E0A1F8EFDC49",
              id: "360D7685-F026-4B75-B814-BDEFAF18A441",
              color: "foreground",
            },
          },
          byEntityId: {
            "752A3387-FA59-469F-8929-E0A1F8EFDC49": [
              "360D7685-F026-4B75-B814-BDEFAF18A441",
            ],
          },
        },
        component: {
          entityId: "752A3387-FA59-469F-8929-E0A1F8EFDC49",
          id: "360D7685-F026-4B75-B814-BDEFAF18A441",
          color: "background",
        },
      },
      {
        byComponentId: {
          "360D7685-F026-4B75-B814-BDEFAF18A441": {
            entityId: "752A3387-FA59-469F-8929-E0A1F8EFDC49",
            id: "360D7685-F026-4B75-B814-BDEFAF18A441",
            color: "background",
          },
        },
        byEntityId: {
          "752A3387-FA59-469F-8929-E0A1F8EFDC49": [
            "360D7685-F026-4B75-B814-BDEFAF18A441",
          ],
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
