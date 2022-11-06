import { Antagonistic } from "antagonistic";
import { Component } from "component";
import { ComponentIndex } from "component-index";
import { createAntagonisticComponent } from "create-antagonistic-component";
import { createUuid } from "uuid";
import { createAntagonistEntity } from "./create-antagonist-entity";

jest.mock("create-antagonistic-component");

const mockCreateAntagonisticComponent = jest.mocked(
  createAntagonisticComponent
);

const mockComponentIndex: ComponentIndex = {
  byComponentId: {},
  byEntityId: {},
};

const mockEntityId = createUuid();

const mockCreateAntagonisticComponentResult: ComponentIndex<
  Partial<Antagonistic> & Component
> = {
  byComponentId: {},
  byEntityId: {},
};

describe("The createAntagonistEntity function", () => {
  test("should return the result of the mock createAntagonisticComponent function", () => {
    mockCreateAntagonisticComponent.mockReturnValueOnce(
      mockCreateAntagonisticComponentResult
    );

    const result = createAntagonistEntity({
      componentIndex: mockComponentIndex,
      entityId: mockEntityId,
    });

    expect(result).toStrictEqual(mockCreateAntagonisticComponentResult);
  });
});
