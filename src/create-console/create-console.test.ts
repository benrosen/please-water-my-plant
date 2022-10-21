/** @jest-environment jsdom */

import { Game } from "phaser";
import { createUuid } from "uuid";
import { createConsole } from "./create-console";

jest.mock("phaser", () => {
  return {
    Game: jest.fn(),
  };
});

const mockedGame = jest.mocked(Game);

describe("The createConsole function", () => {
  test("creates a new Game instance", () => {
    const id = createUuid();

    createConsole({
      createController: jest.fn(),
      id,
    });

    expect(mockedGame).toHaveBeenCalled();
  });
});
