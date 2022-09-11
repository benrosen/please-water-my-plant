import {Response} from "express";

/**
 * Send a 500 status code to the client via the given {@link Response}.
 * @param params The config options
 * @param params.response The {@link Response} with which to send a 500 status code to the client.
 */
export const respondWithInternalServerError = ({
  response,
}: {
  response: Response;
}) => {
  response.status(500);

  response.send();
};
