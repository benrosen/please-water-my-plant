import {Response} from "express";
import {AcceptedStatusCode} from "../accepted-status-code";
import {respondWithStatusCode} from "../respond-with-status-code";

/**
 * Send an {@link AcceptedStatusCode} to the client via the given {@link Response}.
 * @param params The config options
 * @param params.response The {@link Response} with which to send an {@link AcceptedStatusCode} to the client.
 */
export const respondWithAccepted = ({ response }: { response: Response }) => {
  respondWithStatusCode({
    response,
    statusCode: AcceptedStatusCode,
  });
};
