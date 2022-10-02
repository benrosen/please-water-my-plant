import {Response} from "express";
import {ACCEPTED_STATUS_CODE} from "../accepted-status-code";
import {respondWithStatusCode} from "../respond-with-status-code";

/**
 * Send an {@link ACCEPTED_STATUS_CODE} to the client via the given {@link Response}.
 * @param params The config options
 * @param params.response The {@link Response} with which to send an {@link ACCEPTED_STATUS_CODE} to the client.
 */
export const respondWithAccepted = ({ response }: { response: Response }) => {
  respondWithStatusCode({
    response,
    statusCode: ACCEPTED_STATUS_CODE,
  });
};
