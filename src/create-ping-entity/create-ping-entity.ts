import { ComponentIndex } from "component-index";
import { createPerishableComponent } from "create-perishable-component";
import { EntityRelated } from "entity-related";
import { PingOrder } from "ping-order";
import { Positioned } from "positioned";
import { createUuid } from "uuid";

export const createPingEntity = ({
  componentIndex,
  creatorEntityId,
  position,
}: Pick<PingOrder, keyof Positioned> & {
  componentIndex: ComponentIndex;
  creatorEntityId: EntityRelated[keyof EntityRelated];
}) => {
  const entityId = createUuid();

  // named ping
  // elliptical (positioned & wide & tall)
  // created by entityId
  // colored based on antagonist/protagonist
  // sounds like bell
  // animated
  // gainsWidthOverTime
  // gainsHeightOverTime
  // losesOpacityOverTime

  // perishable
  return createPerishableComponent({
    componentIndex,
    entityId,
    lifespan: 1000,
  });
};
