import {ANTAGONIST} from "antagonist";
import {Antagonistic} from "antagonistic";
import {Component} from "component";
import {ComponentIndex} from "component-index";
import {createComponentIndex} from "create-component-index";
import {EntityRelated} from "entity-related";
import {getIndexers} from "get-indexers";
import {createUuid} from "uuid";

/**
 * Create an {@link Antagonistic} {@link Component} for the specified {@link Antagonist} in the given {@link ComponentIndex}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that will contain the new {@link Antagonistic} {@link Component}
 * @param params.entityId The id of the {@link Antagonist}
 */
export const createAntagonisticComponent = ({
  componentIndex,
  entityId,
}: EntityRelated & {
  componentIndex: ComponentIndex;
}): ComponentIndex => {
  const components = Object.values(componentIndex.byComponentId);

  const antagonisticComponent: Antagonistic & Component = {
    entityId,
    id: createUuid(),
    role: ANTAGONIST,
  };

  return createComponentIndex({
    components: [...components, antagonisticComponent],
    indexers: getIndexers(),
  });
};
