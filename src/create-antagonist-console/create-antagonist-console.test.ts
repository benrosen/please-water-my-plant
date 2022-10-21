/** @jest-environment jsdom */

import { createAntagonistController } from "create-antagonist-controller";
import { createConsole } from "create-console";
import { createUuid } from "uuid";
import { createAntagonistConsole } from "./create-antagonist-console";

jest.mock("create-console");

jest.mock("phaser", () => {
  return {
    Game: jest.fn(),
  };
});

describe("The createAntagonistConsole function", () => {
  describe("invokes the createConsole function", () => {
    test("with the createAntagonistController function", () => {
      const id = createUuid();

      createAntagonistConsole({ id });

      expect(createConsole).toHaveBeenCalledWith(
        expect.objectContaining({
          createController: createAntagonistController,
        })
      );
    });
    test("with the provided id", () => {
      const id = createUuid();

      createAntagonistConsole({ id });

      expect(createConsole).toHaveBeenCalledWith(
        expect.objectContaining({
          id,
        })
      );
    });
  });
});
