import { isUuid, Uuid } from "uuid";

const validUuids: Uuid[] = [
  "c851382d-4f20-4245-b0ca-0532b6dcd99c",
  "08bb5cc6-3127-4653-a064-1eda585d5d22",
  "7220e0d9-a473-4a5f-a123-a96761d90eb4",
  "1e4866b3-8b13-40fe-9d03-a76c9b6271cb",
  "d8ca1697-53bd-4cbf-9b60-4bca529f6b99",
  "9258E2C2-76F1-4749-9143-A298A3F7F50C",
  "FCD0F8B2-ACAD-42E5-BE21-DEF800FAA476",
  "1CBD6A79-8668-4E9E-AB1C-65C5313991F7",
  "4020A4A4-D017-434E-B297-0660FAFE4A9F",
  "F2A89820-2FCF-4532-AD2A-671600E475DC",
];

const invalidUuids: unknown[] = [
  "",
  "08bb5cc6",
  "c851382d-4f20",
  "4245-b0ca-0532b6dcd99c",
];

describe("The isUuid type-guard function", () => {
  describe("should return true", () => {
    test.each(validUuids)(
      "when the given value, %j, is a VALID uuid",
      (validUuid) => {
        const result = isUuid(validUuid);
        expect(result).toStrictEqual(true);
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidUuids)(
      "when the given value, %j, is an INVALID uuid",
      (invalidUuid) => {
        const result = isUuid(invalidUuid);
        expect(result).toStrictEqual(false);
      }
    );
  });
});
