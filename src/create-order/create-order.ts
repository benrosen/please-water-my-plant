import {Order} from "order";
import {createUuid} from "uuid";

/**
 * Create an {@link Order} instance with the provided entity id.
 * @param params The config options
 * @param params.entityId A {@link Uuid} that identifies the subject of this {@link Order}
 */
export const createOrder = ({ entityId }: Pick<Order, "entityId">): Order => {
  return {
    entityId,
    id: createUuid(),
    timestamp: Date.now(),
  };
};
