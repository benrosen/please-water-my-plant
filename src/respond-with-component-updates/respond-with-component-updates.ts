import {Response} from "express";
import {Component} from "../component";
import {configureServerSentEventsResponse} from "../configure-server-sent-events-response";

/**
 * Send {@link Component} updates as server-sent events to the client via the given {@link Response}.
 * @param params The config options
 * @param params.registerOnComponentsChangedHandler A higher-order function that registers a callback that can send {@link Component} updates via server-sent events.
 * @param params.response The {@link Response} with which to send {@link Component} updates as server-sent events to the client.
 */
export const respondWithComponentUpdates = ({
  registerOnComponentsChangedHandler,
  response,
}: {
  registerOnComponentsChangedHandler: (
    handleOnComponentsChanged: (components: Component[]) => void
  ) => void;
  response: Response;
}) => {
  configureServerSentEventsResponse({
    registerSendEventCallback: registerOnComponentsChangedHandler,
    response,
  });
};
