import { isEndsWith } from "./is-ends-with";

const validExamples: [string, string][] = [
  ["/foo", "/foo"],
  ["/baz", "/foo/bar/baz"],
  ["", ""],
  ["", "/bar"],
];

const invalidExamples: unknown[] = [
  ["/", "foo"],
  ["/foo/", "foo/bar/baz"],
  ["..", "foo"],
];

describe("The isEndsWith type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the EndsWith interface",
      (substring, value) => {
        const result = isEndsWith(value, substring);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the EndsWith interface",
      (substring, value) => {
        const result = isEndsWith(value as string, substring as string);
        expect(result).toBeFalsy();
      }
    );
  });
});
