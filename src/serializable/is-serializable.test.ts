import { isSerializable } from "./is-serializable";
import { Serializable } from "./serializable";

const validExamples: Serializable[] = [
  "foo",
  0,
  null,
  true,
  false,
  ["bar", "baz", 1],
  { foo: 0, bar: [null, false] },
];

const invalidExamples: unknown[] = [
  () => {
    return "foo";
  },
  undefined,
  [0, undefined, 1, 2, 3],
  {
    bar: () => {
      return "baz";
    },
  },
];

describe("The isSerializable type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Serializable interface",
      (validExample) => {
        const result = isSerializable(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Serializable interface",
      (invalidExample) => {
        const result = isSerializable(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
