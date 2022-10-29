import {createPingOrder} from "create-ping-order";
import {IdentifiedByUuid} from "identified-by-uuid";
import {Positioned} from "positioned";
import {postOrder} from "post-order";

/**
 * Post a {@link PingOrder} to the {@link OrderResourcePath}
 * @param params
 * @param params.id
 * @param params.position
 */
export const postPingOrder = ({
  id,
  position,
}: IdentifiedByUuid & Positioned) => {
  const order = createPingOrder({
    entityId: id,
    position: position,
  });

  return postOrder({ order });
};
