import { getFrameDuration } from "./get-frame-duration";

describe("The getFrameDuration function", () => {
  test.each([
    [{ framesPerSecond: 0 }, Infinity],
    [{ framesPerSecond: 1 }, 1000],
    [{ framesPerSecond: 24 }, 1000 / 24],
    [{ framesPerSecond: 30 }, 1000 / 30],
    [{ framesPerSecond: 60 }, 1000 / 60],
  ] as [Parameters<typeof getFrameDuration>[0], ReturnType<typeof getFrameDuration>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = getFrameDuration(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
