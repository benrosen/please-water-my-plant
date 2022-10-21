/** @jest-environment jsdom */

import { createConsole } from "create-console";
import { createProtagonistController } from "create-protagonist-controller";
import { createUuid } from "uuid";
import { createProtagonistConsole } from "./create-protagonist-console";

jest.mock("create-console");

jest.mock("phaser", () => {
  return {
    Game: jest.fn(),
  };
});

describe("The createProtagonistConsole function", () => {
  describe("invokes the createConsole function", () => {
    test("with the createProtagonistController function", () => {
      const id = createUuid();

      createProtagonistConsole({ id });

      expect(createConsole).toHaveBeenCalledWith(
        expect.objectContaining({
          createController: createProtagonistController,
        })
      );
    });
    test("with the provided id", () => {
      const id = createUuid();

      createProtagonistConsole({ id });

      expect(createConsole).toHaveBeenCalledWith(
        expect.objectContaining({
          id,
        })
      );
    });
  });
});
