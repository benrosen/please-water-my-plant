import {createConsole} from "create-console";
import {createProtagonistController} from "create-protagonist-controller";
import {IdentifiedByUuid} from "identified-by-uuid";
import {PROTAGONIST} from "protagonist";

/**
 * Create a {@link Game} instance that can render a {@link Component} array and post {@link Order} requests in response to protagonist input.
 * @param params The config options
 * @param params.id A {@link Uuid} that identifies this protagonist console
 */
export const createProtagonistConsole = ({ id }: IdentifiedByUuid) => {
  createConsole({
    createController: createProtagonistController,
    id,
    role: PROTAGONIST,
  });
};
