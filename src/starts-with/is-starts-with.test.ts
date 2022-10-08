import { isStartsWith } from "starts-with";

const validExamples: [string, string][] = [
  ["/", "/foo"],
  ["/foo/", "/foo/bar/baz"],
  ["..", "../foo"],
  ["", ""],
  ["", "/bar"],
];

const invalidExamples: unknown[] = [
  ["/", "foo"],
  ["/foo/", "foo/bar/baz"],
  ["..", "foo"],
];

describe("The isStartsWith type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the StartsWith interface",
      (substring, value) => {
        const result = isStartsWith(value, substring);

        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the StartsWith interface",
      (substring, value) => {
        const result = isStartsWith(value as string, substring as string);

        expect(result).toBeFalsy();
      }
    );
  });
});
