import {Express} from "express";
import {Order} from "../order";
import {OrderResourcePath} from "../order-resource-path";
import {parseOrderFromRequest} from "../parse-order-from-request";
import {respondWithAccepted} from "../respond-with-accepted";
import {respondWithBadRequestError} from "../respond-with-bad-request-error";
import {respondWithInternalServerError} from "../respond-with-internal-server-error";

/**
 * Configure an {@link Express} instance with an endpoint that accepts {@link Order} objects via POST requests.
 * @param params The config options
 * @param params.handlePostedOrder A callback function to handle each newly posted {@link Order}.
 * @param params.server The {@link Express} instance to configure with an endpoint that can accept {@link Order} objects via POST requests.
 */
export const configurePostOrderEndpoint = ({
  handlePostedOrder,
  server,
}: {
  handlePostedOrder: (order: Order) => void;
  server: Express;
}) => {
  server.post(OrderResourcePath, (request, response) => {
    try {
      const order = parseOrderFromRequest({ request });

      if (order === undefined) {
        return respondWithBadRequestError({ response });
      }

      handlePostedOrder(order);

      return respondWithAccepted({ response });
    } catch {
      return respondWithInternalServerError({ response });
    }
  });
};
