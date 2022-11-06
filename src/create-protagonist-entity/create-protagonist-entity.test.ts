import { Component } from "component";
import { ComponentIndex } from "component-index";
import { createProtagonisticComponent } from "create-protagonistic-component";
import { Protagonistic } from "protagonistic";
import { createUuid } from "uuid";
import { createProtagonistEntity } from "./create-protagonist-entity";

jest.mock("create-protagonistic-component");

const mockCreateProtagonisticComponent = jest.mocked(
  createProtagonisticComponent
);

const mockComponentIndex: ComponentIndex = {
  byComponentId: {},
  byEntityId: {},
};

const mockEntityId = createUuid();

const mockCreateProtagonisticComponentResult: ComponentIndex<
  Partial<Protagonistic> & Component
> = {
  byComponentId: {},
  byEntityId: {},
};

describe("The createProtagonistEntity function", () => {
  test("should return the result of the mock createProtagonisticComponent function", () => {
    mockCreateProtagonisticComponent.mockReturnValueOnce(
      mockCreateProtagonisticComponentResult
    );

    const result = createProtagonistEntity({
      componentIndex: mockComponentIndex,
      entityId: mockEntityId,
    });

    expect(result).toStrictEqual(mockCreateProtagonisticComponentResult);
  });
});
