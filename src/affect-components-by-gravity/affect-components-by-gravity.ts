import {accelerate} from "accelerate";
import {ComponentIndex} from "component-index";
import {getComponentsAffectedByGravity} from "get-components-affected-by-gravity";
import {Gravity} from "gravity";

/**
 * Apply the force of {@link Gravity} as {@link Acceleration} to all {@link Kinematic} {@link Component} instances that should be {@link AffectedByGravity}.
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link Kinematic} {@link Component} instances that should be {@link AffectedByGravity}.
 */
export const affectComponentsByGravity = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex;
}) => {
  const components = getComponentsAffectedByGravity({
    componentIndex,
  });

  const componentIds = components.map((component) => {
    return component.id;
  });

  return accelerate({
    acceleration: Gravity,
    componentIndex,
    componentIds,
  });
};
