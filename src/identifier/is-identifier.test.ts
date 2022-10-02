import { isIdentifier } from "./is-identifier";

const validExamples = [
  "C63B397E-AF40-43C3-81C8-3F14A86EB7EE",
  "7547F144-6E23-482D-B83F-477A32A49D3C",
  "7F4DD28D-23E8-46FD-AEDB-FBB9923DE078",
  "6A114A5C-87C1-40BF-A408-DAD2382C5DF9",
  "17887E2B-F2BA-481E-BDDA-70566B368AA7",
];

const invalidExamples = ["", false, { foo: "bar" }, 123, ["foo", "bar"]];

describe("The isIdentifier type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, is a valid identifier",
      (validIdentifier) => {
        const result = isIdentifier(validIdentifier);
        expect(result).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, is an invalid identifier",
      (invalidIdentifier) => {
        const result = isIdentifier(invalidIdentifier);
        expect(result).toStrictEqual(false);
      }
    );
  });
});
