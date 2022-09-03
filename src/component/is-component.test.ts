import { isComponent } from "./is-component";

describe("The isComponent type-guard function", () => {
  describe("should return true", () => {
    test.each([{ entityId: "foo", id: "foo" }])(
      "when the given value, %j, is a valid component",
      (validValue) => {
        expect(isComponent(validValue)).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each([{ id: 0 }, { entity: { id: "foo" } }])(
      "when the given value, %j, is not a valid component",
      (invalidValue) => {
        expect(isComponent(invalidValue)).toBeFalsy();
      }
    );
  });
});
