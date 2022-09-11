import {Response} from "express";
import {ClientRetryInterval} from "../client-retry-interval";

/**
 * Send the {@link ClientRetryInterval} to the client via the provided {@link Response}.
 * @param params The config options
 * @param params.response The {@link Response} to which the {@link ClientRetryInterval} will be written.
 */
export const configureClientRetryInterval = ({
  response,
}: {
  response: Response;
}) => {
  response.write(
    JSON.stringify({
      retry: ClientRetryInterval,
    })
  );
};
