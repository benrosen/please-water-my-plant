import { CONNECT } from "connect";
import { ConnectOrder } from "connect-order";
import { createTimestamp } from "create-timestamp";
import { EntityRelated } from "entity-related";
import { RoleRelated } from "role-related";
import { createUuid } from "uuid";

export const createConnectOrder = ({
  entityId,
  role,
}: EntityRelated & RoleRelated): ConnectOrder => {
  return {
    entityId,
    id: createUuid(),
    name: CONNECT,
    role,
    timestamp: createTimestamp(),
  };
};
