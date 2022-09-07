import { isOrder } from "./is-order";

const validExamples = [{ id: "foo", entityId: "bar", timestamp: 0 }];

const invalidExamples = [{ entity: "foo" }, { id: "bar" }];

describe("The isOrder type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Order interface",
      (validExample) => {
        const result = isOrder(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Order interface",
      (invalidExample) => {
        const result = isOrder(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
