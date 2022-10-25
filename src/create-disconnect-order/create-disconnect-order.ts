import { createTimestamp } from "create-timestamp";
import { DISCONNECT } from "disconnect";
import { DisconnectOrder } from "disconnect-order";
import { EntityRelated } from "entity-related";
import { createUuid } from "uuid";

export const createDisconnectOrder = ({
  entityId,
}: EntityRelated): DisconnectOrder => {
  return {
    entityId,
    id: createUuid(),
    name: DISCONNECT,
    timestamp: createTimestamp(),
  };
};
