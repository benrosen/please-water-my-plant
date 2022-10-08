import { isContains } from "./is-contains";

const validExamples = [
  ["/", "/foo"],
  ["/foo/", "/foo/bar/baz"],
  ["..", "../foo"],
  ["", ""],
  ["", "/bar"],
  ["foo", "/foo"],
  ["/bar/", "foo/bar/baz"],
];

const invalidExamples = [
  [" ", "foo"],
  ["/foo/", "foo/bar/baz"],
  ["..", "foo"],
];

describe("The isContains type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the Contains interface",
      (substring, value) => {
        const result = isContains(value, substring);

        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the Contains interface",
      (substring, value) => {
        const result = isContains(value, substring);

        expect(result).toBeFalsy();
      }
    );
  });
});
