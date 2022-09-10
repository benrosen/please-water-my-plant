import {Response} from "express";
import {ServerSentEventHeaders} from "../server-sent-event-headers";

/**
 * Configure an HTTP {@link Response} with {@link ServerSentEventHeaders}.
 * @param params The config options
 * @param params.response The HTTP {@link Response} to configure with {@link ServerSentEventHeaders}.
 */
export const setAndFlushServerSentEventHeaders = ({
  response,
}: {
  response: Response;
}) => {
  response.set(ServerSentEventHeaders);

  response.flushHeaders();
};
