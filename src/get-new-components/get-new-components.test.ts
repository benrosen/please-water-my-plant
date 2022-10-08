import { ComponentIndex } from "component-index";
import { getNewComponents } from "get-new-components";

describe("The getNewComponents function", () => {
  it("should return an array", () => {
    const componentIndex: ComponentIndex = {
      byComponentId: {},
      byEntityId: {},
    };

    const result = getNewComponents({ componentIndex });

    expect(Array.isArray(result)).toStrictEqual(true);
  });
});
