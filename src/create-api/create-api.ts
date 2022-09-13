import * as express from "express";
import {Component} from "../component";
import {configureGetComponentsEndpoint} from "../configure-get-components-endpoint";
import {configurePostOrderEndpoint} from "../configure-post-order-endpoint";
import {Order} from "../order";

/**
 * Create an API for posting {@link Order} objects and getting {@link Component} updates.
 * @param params The config options
 * @param params.onOrderPosted A callback function to handle each newly posted {@link Order}.
 * @param params.registerOnComponentsChangedHandler A higher-order function that registers a callback that can send {@link Component} updates via server-sent events.
 */
export const createApi = ({
  onOrderPosted,
  registerOnComponentsChangedHandler,
}: {
  onOrderPosted: (order: Order) => void;
  registerOnComponentsChangedHandler: (
    handleOnComponentsChanged: (components: Component[]) => void
  ) => void;
}) => {
  const server = express();

  configureGetComponentsEndpoint({
    registerOnComponentsChangedHandler,
    server,
  });

  configurePostOrderEndpoint({
    handlePostedOrder: onOrderPosted,
    server,
  });
};
