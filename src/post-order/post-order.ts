import {Order} from "order";
import {OrderResourcePath} from "order-resource-path";

/**
 * Post an {@link Order} to the {@link OrderResourcePath}
 * @param params The config options
 * @param params.order The {@link Order} to post to the {@link OrderResourcePath}
 */
export const postOrder = async ({ order }: { order: Order }) => {
  return fetch(OrderResourcePath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
};
