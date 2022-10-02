import { Acceleration } from "../acceleration";
import { Component } from "../component";
import { ComponentIndex } from "../component-index";
import { Kinematic } from "../kinematic";
import { Uuid } from "../uuid";
import { accelerate } from "./accelerate";

describe("The accelerate function", () => {
  test.each([
    [
      {
        acceleration: { x: 1, y: 1 },
        componentIndex: {
          byComponentId: {
            "3190731E-1071-48B7-9230-20160C9AEBE0": {
              entityId: "42EEE21E-EA1F-4D1E-9D96-4D9FB5892AAF",
              id: "3190731E-1071-48B7-9230-20160C9AEBE0",
              velocity: { x: 0, y: 0 },
              acceleration: { x: 0, y: 0 },
            },
          },
          byEntityId: {
            "42EEE21E-EA1F-4D1E-9D96-4D9FB5892AAF": [
              "3190731E-1071-48B7-9230-20160C9AEBE0",
            ],
          },
        },
        componentIds: ["3190731E-1071-48B7-9230-20160C9AEBE0"],
      },
      {
        byComponentId: {
          "3190731E-1071-48B7-9230-20160C9AEBE0": {
            entityId: "42EEE21E-EA1F-4D1E-9D96-4D9FB5892AAF",
            id: "3190731E-1071-48B7-9230-20160C9AEBE0",
            velocity: { x: 1, y: 1 },
            acceleration: { x: 0, y: 0 },
          },
        },
        byEntityId: {
          "42EEE21E-EA1F-4D1E-9D96-4D9FB5892AAF": [
            "3190731E-1071-48B7-9230-20160C9AEBE0",
          ],
        },
      },
    ],
  ] as [{ acceleration: Acceleration; componentIndex: ComponentIndex<Kinematic & Component>; componentIds: Uuid[] }, ComponentIndex<Kinematic & Component>][])(
    "should return the expected result.",
    (validExample, expectedResult) => {
      const result = accelerate(validExample);
      expect(result).toStrictEqual(expectedResult);
    }
  );
});
