import {ComponentIndex} from "component-index";
import {createComponentIndex} from "create-component-index";
import {getIndexers} from "get-indexers";
import {Uuid} from "uuid";

/**
 * Remove the specified {@link Component} from the given {@link ComponentIndex}
 * @param params The config options
 * @param params.componentId The id of the {@link Component} to remove from the given {@link ComponentIndex}
 * @param params.componentIndex The {@link ComponentIndex} from which to remove the specified {@link Component}
 */
export const removeComponent = ({
  componentId,
  componentIndex,
}: {
  componentId: Uuid;
  componentIndex: ComponentIndex;
}) => {
  const components = Object.values(componentIndex.byComponentId);

  const filteredComponents = components.filter((component) => {
    return component.id !== componentId;
  });

  return createComponentIndex({
    components: filteredComponents,
    indexers: getIndexers(),
  });
};
