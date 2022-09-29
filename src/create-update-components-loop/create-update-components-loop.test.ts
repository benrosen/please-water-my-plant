import { updateComponents } from "../update-components";
import { createUpdateComponentsLoop } from "./create-update-components-loop";

jest.mock("../update-components", () => {
  return {
    ...jest.requireActual("../update-components"),
    updateComponents: jest.fn(),
  };
});

const mockUpdateComponents = jest.mocked(updateComponents);

describe("The createUpdateComponentsLoop function", () => {
  describe("should call updateComponents", () => {
    beforeEach(() => {
      jest.resetAllMocks();
      jest.useFakeTimers();
    });

    test.each([1, 2, 24, 30])(
      "the expected number of times per second",
      (framesPerSecond) => {
        createUpdateComponentsLoop({
          framesPerSecond,
          getNewComponents: jest.fn(),
          getOldComponents: jest.fn(),
          getIndexers: jest.fn(),
          setComponents: jest.fn(),
        });

        jest.advanceTimersByTime(1000);

        expect(mockUpdateComponents).toHaveBeenCalledTimes(framesPerSecond);
      }
    );
  });
});
