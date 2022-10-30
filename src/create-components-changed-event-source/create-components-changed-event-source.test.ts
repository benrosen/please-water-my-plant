/** @jest-environment jsdom */

import EventSource from "eventsource";
import { ANTAGONIST } from "../antagonist";
import { createComponentsChangedEventSourceUrl } from "../create-components-changed-event-source-url";
import { createUuid } from "../uuid";
import { createComponentsChangedEventSource } from "./create-components-changed-event-source";
import resetAllMocks = jest.resetAllMocks;

jest.mock("../create-components-changed-event-source-url");

const mockCreateComponentsChangeEventSourceUrl = jest.mocked(
  createComponentsChangedEventSourceUrl
);

jest.mock("eventsource");

const defaultEventSource = window.EventSource;

window.EventSource = EventSource;

beforeEach(() => {
  resetAllMocks();
});

afterAll(() => {
  window.EventSource = defaultEventSource;
});

describe("The createComponentsChangedEventSource function", () => {
  describe("should invoke the event source constructor", () => {
    test("with the value returned by the create components changed event source url function", () => {
      const mockEventSourceUrl = "foo";

      mockCreateComponentsChangeEventSourceUrl.mockImplementationOnce(() => {
        return mockEventSourceUrl;
      });

      createComponentsChangedEventSource({
        id: createUuid(),
        role: ANTAGONIST,
      });

      expect(EventSource).toHaveBeenCalledWith(mockEventSourceUrl);
    });
  });
});
