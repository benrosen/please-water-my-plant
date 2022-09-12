import {Response} from "express";
import {StatusCode} from "../status-code";

/**
 * Send a status code to the client via the given {@link Response}.
 * @param params The config options
 * @param params.response The {@link Response} with which to send a status code to the client.
 * @param params.statusCode The {@link StatusCode} to send via the provided {@link Response}.
 */
export const respondWithStatusCode = ({
  response,
  statusCode,
}: {
  response: Response;
  statusCode: StatusCode;
}) => {
  response.status(statusCode);

  response.send();
};
