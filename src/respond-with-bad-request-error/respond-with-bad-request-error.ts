import {BadRequestErrorStatusCode} from "bad-request-error-status-code";
import {Response} from "express";
import {respondWithStatusCode} from "respond-with-status-code";

/**
 * Send a {@link BadRequestErrorStatusCode} to the client via the given {@link Response}.
 * @param params The config options
 * @param params.response The {@link Response} with which to send a {@link BadRequestErrorStatusCode} to the client.
 */
export const respondWithBadRequestError = ({
  response,
}: {
  response: Response;
}) => {
  respondWithStatusCode({
    response,
    statusCode: BadRequestErrorStatusCode,
  });
};
