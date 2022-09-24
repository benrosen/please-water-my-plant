import {Request} from "express";
import {isOrder, Order} from "../order";

/**
 * Parse an {@link Order} instance from an incoming request.
 * @param params The config options
 * @param params.request The request from which to parse the {@link Order} instance.
 */
export const parseOrderFromRequest = ({
  request,
}: {
  request: Request;
}): Order | undefined => {
  const canParseOrder = isOrder(request.body);

  if (canParseOrder) {
    return request.body;
  } else {
    return undefined;
  }
};
