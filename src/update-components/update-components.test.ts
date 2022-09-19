import { Component } from "../component";
import { updateComponents } from "./update-components";

describe("The updateComponents function", () => {
  it("should call setComponents with an array of components", function () {
    const mockSetComponents = jest.fn();

    updateComponents({
      getNewComponents: jest.fn().mockReturnValue([] as Component[]),
      setComponents: mockSetComponents,
      getOldComponents: jest.fn().mockReturnValue([] as Component[]),
      getIndexers: jest.fn().mockReturnValue([]),
    });

    expect(mockSetComponents).toHaveBeenCalledWith(expect.any(Array));
  });
});
