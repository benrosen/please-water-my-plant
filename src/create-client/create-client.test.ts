/** @jest-environment jsdom */

import { ANTAGONIST } from "antagonist";
import { createComponentsChangedEventSource } from "create-components-changed-event-source";
import EventSource from "eventsource";
import { createUuid } from "uuid";
import { createClient } from "./create-client";
import resetAllMocks = jest.resetAllMocks;

const defaultEventSource = window.EventSource;

window.EventSource = EventSource;

beforeEach(() => {
  resetAllMocks();
});

afterAll(() => {
  window.EventSource = defaultEventSource;
});

jest.mock("create-components-changed-event-source");

const mockCreateComponentsChangedEventSource = jest.mocked(
  createComponentsChangedEventSource
);

describe("The createClient function", () => {
  it("should call createComponentsChangedEventSource with the given id and role", function () {
    const mockId = createUuid();

    const mockRole = ANTAGONIST;

    const mockHandleOnComponentsChanged = jest.fn();

    const mockEventSource = new EventSource("");

    mockCreateComponentsChangedEventSource.mockReturnValueOnce(mockEventSource);

    createClient({
      handleOnComponentsChanged: mockHandleOnComponentsChanged,
      id: mockId,
      role: mockRole,
    });

    expect(mockCreateComponentsChangedEventSource).toHaveBeenCalledWith(
      expect.objectContaining({
        id: mockId,
        role: mockRole,
      })
    );
  });

  test.todo(
    "should invoke the handleOnComponentsChanged callback when the event source"
  );
});
