import {ComponentIndex} from "component-index";
import {createProtagonisticComponent} from "create-protagonistic-component";
import {EntityRelated} from "entity-related";

/**
 * Create the {@link Component} instances that comprise a protagonist
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that will contain the new {@link Component} instances
 * @param params.entityId The client id of the protagonist
 */
export const createProtagonistEntity = ({
  componentIndex,
  entityId,
}: { componentIndex: ComponentIndex } & EntityRelated) => {
  return createProtagonisticComponent({
    componentIndex,
    entityId,
  });
};
