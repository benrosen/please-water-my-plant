import {createClient} from "create-client";
import {createRenderer} from "create-renderer";
import {Order} from "order";
import {Game, Scene} from "phaser";

/**
 * Create a {@link Game} instance that can render a {@link Component} array and post {@link Order} requests.
 * @param params The config options
 * @param params.createController Creates {@link Order} objects from user input
 */
export const createConsole = ({
  createController,
}: {
  createController: (props: {
    handleOnOrderCreated: (order: Order) => void;
    scene: Scene;
  }) => void;
}) => {
  new Game({
    backgroundColor: "#ffffff",
    scene: {
      create: function (this: Scene) {
        const renderComponents = createRenderer();

        const postOrder = createClient({
          handleOnComponentsChanged: renderComponents,
        });

        createController({ handleOnOrderCreated: postOrder, scene: this });
      },
    },
  });
};
