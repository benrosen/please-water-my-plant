import {ComponentIndex} from "component-index";
import {createComponentIndex} from "create-component-index";
import {EntityRelated} from "entity-related";
import {getIndexers} from "get-indexers";

/**
 * Remove the specified entity from the provided {@link ComponentIndex}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} from which to remove the specified entity
 * @param params.entityId The id of the entity to remove from the provided {@link ComponentIndex}
 */
export const removeComponentsByEntityId = ({
  componentIndex,
  entityId,
}: EntityRelated & {
  componentIndex: ComponentIndex;
}) => {
  const components = Object.values(componentIndex.byComponentId);

  const filteredComponents = components.filter((component) => {
    return component.entityId !== entityId;
  });

  return createComponentIndex({
    components: filteredComponents,
    indexers: getIndexers(),
  });
};
