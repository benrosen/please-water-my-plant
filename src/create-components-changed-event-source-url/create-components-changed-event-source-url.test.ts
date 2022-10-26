import { ANTAGONIST } from "antagonist";
import { ComponentsResourcePath } from "components-resource-path";
import { createComponentsChangedEventSourceUrl } from "./create-components-changed-event-source-url";

describe("The createComponentsChangedEventSourceUrl function", () => {
  test.each([
    [
      {
        clientId: "bb6be9fc-8164-4caa-991d-c8801137837d",
        role: ANTAGONIST,
      },
      `${ComponentsResourcePath}?clientId=${"bb6be9fc-8164-4caa-991d-c8801137837d"}&role=${ANTAGONIST}`,
    ],
  ] as [Parameters<typeof createComponentsChangedEventSourceUrl>[0], ReturnType<typeof createComponentsChangedEventSourceUrl>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = createComponentsChangedEventSourceUrl(validExample);

      expect(result).toStrictEqual(expectedResult);
    }
  );
});
