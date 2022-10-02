import { isEntityRelated } from "./is-entity-related";

const validExamples = [
  { entityId: "D65EE2AF-5AF8-47E7-AA40-90365E6DC9FA" },
  { entityId: "94FED290-67F7-4D10-A1B8-A701FEFB0F06" },
  { entityId: "B71F0A75-879E-4393-93D2-A22570DB1958" },
  { entityId: "925A38BE-379F-4AC1-A6A4-A1F01FBF2528" },
  { entityId: "4DE26955-5C17-4DBE-8C24-B5611D70AD36" },
];

const invalidExamples = [
  { entity: "foo" },
  { id: "bar" },
  { entityId: "" },
  { entityId: false },
  { entityId: "4DE26955-5C17-4DBE" },
];

describe("The isEntityRelated type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the EntityRelated interface",
      (validExample) => {
        const result = isEntityRelated(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the EntityRelated interface",
      (invalidExample) => {
        const result = isEntityRelated(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
