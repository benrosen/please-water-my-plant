import { isOrder } from "order";

const validExamples = [
  {
    id: "023115B2-BF5B-468C-B288-CA0849CB08BD",
    entityId: "008EC055-3D21-4007-BAE3-AEC936E7D2BE",
    timestamp: 0,
    name: "foo",
  },
];

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
