import {Express} from "express";
import {ChangeEventName} from "../change-event-name";
import {Component} from "../component";
import {ComponentIndex} from "../component-index";
import {createApi} from "../create-api";
import {createUpdateComponentsLoop} from "../create-update-components-loop";
import {FramesPerSecond} from "../frames-per-second";
import {Observable} from "../observable";
import {Order} from "../order";

/**
 * Create a game server that allows clients to update the game via POST requests, subscribe to game state changes via server-sent events, and visit HTML pages.
 * @param params The config options
 * @param params.framesPerSecond The number of times per second to update the state of the game
 * @param params.getNewComponents A callback function that derives the next state of the game.
 * @param params.getIndexers A callback function that returns an array of component indexers.
 */
export const createServer = ({
  framesPerSecond,
  getNewComponents,
  getIndexers,
}: {
  framesPerSecond: FramesPerSecond;
  getNewComponents: (props: { componentIndex: ComponentIndex }) => Component[];
  getIndexers: () => ((component: Component) => boolean)[];
}): Express => {
  const components = new Observable<Component[]>([]);

  const api = createApi({
    onOrderPosted: (order: Order) => {
      components.value = [...components.value, order];
    },
    registerOnComponentsChangedHandler: (
      handleOnComponentsChanged: (components: Component[]) => void
    ) => {
      components.on(ChangeEventName, handleOnComponentsChanged);

      return () => {
        components.off(ChangeEventName, handleOnComponentsChanged);
      };
    },
  });

  createUpdateComponentsLoop({
    framesPerSecond,
    getNewComponents,
    getOldComponents: () => {
      return components.value;
    },
    getIndexers,
    setComponents: (newComponents: Component[]) => {
      components.value = newComponents;
    },
  });

  return api;
};
