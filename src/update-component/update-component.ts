import {Component} from "../component";
import {ComponentIndex} from "../component-index";

/**
 * Update the value of a {@link Component} in a {@link ComponentIndex}
 * @param params The config options.
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link Component} to update
 * @param params.component The new value for the {@link Component}
 */
export const updateComponent = <GenericComponent extends Component>({
  componentIndex,
  component,
}: {
  componentIndex: ComponentIndex;
  component: GenericComponent;
}): ComponentIndex => {
  return {
    ...componentIndex,
    byComponentId: {
      ...componentIndex.byComponentId,
      [component.id]: component,
    },
  };
};
