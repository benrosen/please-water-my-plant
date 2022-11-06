import { ComponentIndex } from "component-index";
import { createPingEntity } from "create-ping-entity";
import { PingOrder } from "ping-order";

export const handlePingOrder = ({
  componentIndex,
  order,
}: {
  componentIndex: ComponentIndex;
  order: PingOrder;
}) => {
  return createPingEntity({
    componentIndex,
    creatorEntityId: order.entityId,
    position: order.position,
  });
  // ping entity is made of many components
  // components and interfaces are both compositional building blocks
  // is a ping a component? or is it an entity?
  // createPingEntity
  // ping = circular & noisy & soundsLike & perishable
  // create a perishable ping object with a timestamp and an expiresAt timestamp
  // remove objects that have expired each frame
  // renderer interpolates ping audiovisuals based on createdAt timestamp, expiresAt timestamp, and current timestamp from timeserver
};
