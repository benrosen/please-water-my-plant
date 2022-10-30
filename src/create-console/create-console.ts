import { createClient } from "create-client";
import { createRenderer } from "create-renderer";
import { IdentifiedByUuid } from "identified-by-uuid";
import { Order } from "order";
import { Game, Scene } from "phaser";
import { postOrder } from "post-order";
import { Role } from "role";
import InputPlugin = Phaser.Input.InputPlugin;

/**
 * Create a {@link Game} instance that can render a {@link Component} array and post {@link Order} requests.
 * @param params The config options
 * @param params.createController Creates {@link Order} objects from user input
 * @param params.id A {@link Uuid} that identifies this console
 * @param params.role The {@link Role} to be assumed by the client
 */
export const createConsole = ({
  createController,
  id,
  role,
}: IdentifiedByUuid & {
  createController: (
    props: IdentifiedByUuid & {
      handleOnOrderCreated: ({ order: Order }) => void;
      input: InputPlugin;
    }
  ) => void;
  role: Role;
}) => {
  new Game({
    backgroundColor: "#ffffff",
    scene: {
      create: function (this: Scene) {
        const renderComponents = createRenderer();

        createClient({
          handleOnComponentsChanged: renderComponents,
          id,
          role,
        });

        createController({
          handleOnOrderCreated: postOrder,
          id,
          input: this.input,
        });
      },
    },
  });
};
