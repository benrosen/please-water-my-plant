import { createComponentIndex } from "./create-component-index";

describe("The createComponentIndex function", () => {
  it("should return the expected result", () => {
    const components = [];
    const expectedComponentIndex = {
      byComponentId: {},
      byEntityId: {},
    };
    const result = createComponentIndex({ components });
    expect(result).toStrictEqual(expectedComponentIndex);
  });
});
