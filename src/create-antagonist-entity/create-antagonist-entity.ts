import {ComponentIndex} from "component-index";
import {createAntagonisticComponent} from "create-antagonistic-component";
import {EntityRelated} from "entity-related";

/**
 * Create the {@link Component} instances that comprise an antagonist
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that will contain the new {@link Component} instances
 * @param params.entityId The client id of the antagonist
 */
export const createAntagonistEntity = ({
  componentIndex,
  entityId,
}: { componentIndex: ComponentIndex } & EntityRelated) => {
  return createAntagonisticComponent({
    componentIndex,
    entityId,
  });
};
