import {Component} from "component";
import {ComponentIndex} from "component-index";
import {createComponentIndex} from "create-component-index";
import {EntityRelated} from "entity-related";
import {getIndexers} from "get-indexers";
import {PROTAGONIST} from "protagonist";
import {Protagonistic} from "protagonistic";
import {createUuid} from "uuid";

/**
 * Create a {@link Protagonistic} {@link Component} for the specified {@link Protagonist} in the given {@link ComponentIndex}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that will contain the new {@link Protagonistic} {@link Component}
 * @param params.entityId The id of the {@link Protagonist}
 */
export const createProtagonisticComponent = ({
  componentIndex,
  entityId,
}: EntityRelated & {
  componentIndex: ComponentIndex;
}): ComponentIndex => {
  const components = Object.values(componentIndex.byComponentId);

  const protagonisticComponent: Protagonistic & Component = {
    entityId,
    id: createUuid(),
    role: PROTAGONIST,
  };

  return createComponentIndex({
    components: [...components, protagonisticComponent],
    indexers: getIndexers(),
  });
};
