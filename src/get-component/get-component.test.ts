import { getComponent } from "get-component";

describe("The getComponent function", () => {
  test.each([
    [
      {
        componentId: "8984F70A-EBF8-4187-A8D4-3D9B0E2FF76A",
        componentIndex: {
          byComponentId: {
            "8984F70A-EBF8-4187-A8D4-3D9B0E2FF76A": {
              entityId: "5B561B17-715E-4C32-A628-B77FFBB3E0A4",
              id: "8984F70A-EBF8-4187-A8D4-3D9B0E2FF76A",
            },
          },
          byEntityId: {
            "5B561B17-715E-4C32-A628-B77FFBB3E0A4": [
              "8984F70A-EBF8-4187-A8D4-3D9B0E2FF76A",
            ],
          },
        },
      },
      {
        entityId: "5B561B17-715E-4C32-A628-B77FFBB3E0A4",
        id: "8984F70A-EBF8-4187-A8D4-3D9B0E2FF76A",
      },
    ],
  ] as [Parameters<typeof getComponent>[0], ReturnType<typeof getComponent>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getComponent(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
