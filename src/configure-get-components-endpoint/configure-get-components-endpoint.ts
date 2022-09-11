import {Express} from "express";
import {Component} from "../component";
import {ComponentsResourcePath} from "../components-resource-path";
import {respondWithComponentUpdates} from "../respond-with-component-updates";
import {respondWithInternalServerError} from "../respond-with-internal-server-error";

/**
 * Configure an {@link Express} instance with an endpoint that accepts GET requests and returns {@link Component} updates via server-sent events.
 * @param params The config options
 * @param params.registerOnComponentsChangedHandler A higher-order function that registers a callback that can send {@link Component} updates via server-sent events.
 * @param params.server The {@link Express} instance to configure with an endpoint that can send {@link Component} updates via server-sent events.
 */
export const configureGetComponentsEndpoint = ({
  registerOnComponentsChangedHandler,
  server,
}: {
  registerOnComponentsChangedHandler: (
    handleOnComponentsChanged: (components: Component[]) => void
  ) => void;
  server: Express;
}) => {
  server.get(ComponentsResourcePath, async (request, response) => {
    try {
      respondWithComponentUpdates({
        registerOnComponentsChangedHandler,
        response,
      });
    } catch {
      respondWithInternalServerError({
        response,
      });
    }
  });
};
