import {Response} from "express";
import {configureClientRetryInterval} from "../configure-client-retry-interval";
import {createServerSentEvent} from "../create-server-sent-event";
import {setAndFlushServerSentEventHeaders} from "../set-and-flush-server-sent-event-headers";

/**
 * Configure a {@link Response} object as a source of server-sent events.
 * @param params The config options
 * @param params.registerSendEventCallback A higher-order function that registers a callback that can send {@link Component} updates via server-sent events.
 * @param params.response The {@link Response} object to configure as a source of server-sent events.
 */
export const configureServerSentEventsResponse = <
  GenericType extends Parameters<typeof JSON.stringify>[0]
>({
  registerSendEventCallback,
  response,
}: {
  registerSendEventCallback: (callback: (props: GenericType) => void) => void;
  response: Response;
}) => {
  setAndFlushServerSentEventHeaders({ response });

  configureClientRetryInterval({ response });

  registerSendEventCallback((props) => {
    createServerSentEvent({
      payload: props,
      response,
    });
  });
};
