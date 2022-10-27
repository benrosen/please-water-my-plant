import {createTimestamp} from "create-timestamp";
import {EntityRelated} from "entity-related";
import {PING} from "ping";
import {PingOrder} from "ping-order";
import {Positioned} from "positioned";
import {createUuid} from "uuid";

/**
 * Create an instance of a {@link PingOrder}
 * @param params The config options
 * @param params.entityId A {@link Uuid} that identifies the creator of the {@link PingOrder}
 * @param params.position The {@link Position} of the {@link Ping}
 */
export const createPingOrder = ({
  entityId,
  position,
}: EntityRelated & Positioned): PingOrder => {
  return {
    entityId,
    id: createUuid(),
    name: PING,
    position,
    timestamp: createTimestamp(),
  };
};
