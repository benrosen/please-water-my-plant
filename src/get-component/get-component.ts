import {Component} from "component";
import {ComponentIndex} from "component-index";
import {Uuid} from "uuid";

/**
 * Retrieve a generic {@link Component} by id from a {@link ComponentIndex}.
 * @param params The config options.
 * @param params.componentId The id of the {@link Component} to retrieve
 * @param params.componentIndex The {@link ComponentIndex} containing the {@link Component} to retrieve
 */
export const getComponent = <GenericType extends Record<string, any>>({
  componentId,
  componentIndex,
}: {
  componentId: Uuid;
  componentIndex: ComponentIndex;
}): Component & GenericType => {
  return componentIndex.byComponentId[componentId] as Component & GenericType;
};
