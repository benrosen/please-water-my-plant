import {Response} from "express";
import {InternalServerErrorStatusCode} from "../internal-server-error-status-code";
import {respondWithStatusCode} from "../respond-with-status-code";

/**
 * Send an {@link InternalServerErrorStatusCode} to the client via the given {@link Response}.
 * @param params The config options
 * @param params.response The {@link Response} with which to send an {@link InternalServerErrorStatusCode} to the client.
 */
export const respondWithInternalServerError = ({
  response,
}: {
  response: Response;
}) => {
  respondWithStatusCode({
    response,
    statusCode: InternalServerErrorStatusCode,
  });
};
