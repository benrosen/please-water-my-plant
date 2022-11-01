import {Request} from "express";
import {isOrder, Order} from "order";

/**
 * Parse an {@link Order} instance from an incoming request.
 * @param params The config options
 * @param params.body The request body from which to parse the {@link Order} instance.
 */
export const parseOrderFromRequest = ({
  body,
}: Pick<Request, "body">): Order | undefined => {
  const canParseOrder = isOrder(body);

  if (canParseOrder) {
    return body;
  } else {
    return undefined;
  }
};
