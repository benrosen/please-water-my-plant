/** @jest-environment jsdom */

import { Game } from "phaser";
import { createConsole } from "./create-console";

jest.mock("phaser", () => {
  return {
    Game: jest.fn(),
  };
});

const mockedGame = jest.mocked(Game);

describe("The createConsole function", () => {
  test("creates a new Game instance", () => {
    createConsole({
      createController: jest.fn(),
    });

    expect(mockedGame).toHaveBeenCalled();
  });
});
