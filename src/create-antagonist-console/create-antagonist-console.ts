import {createAntagonistController} from "create-antagonist-controller";
import {createConsole} from "create-console";
import {IdentifiedByUuid} from "identified-by-uuid";

/**
 * Create a {@link Game} instance that can render a {@link Component} array and post {@link Order} requests in response to antagonist input.
 * @param params The config options
 * @param params.id A {@link Uuid} that identifies this antagonist console
 */
export const createAntagonistConsole = ({ id }: IdentifiedByUuid) => {
  createConsole({
    createController: createAntagonistController,
    id,
  });
};
