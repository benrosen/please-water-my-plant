import {Acceleration} from "acceleration";
import {Component} from "component";
import {ComponentIndex} from "component-index";
import {fixVector} from "fix-vector";
import {getComponent} from "get-component";
import {Kinematic} from "kinematic";
import {updateComponent} from "update-component";
import {Uuid} from "uuid";

/**
 * Update the {@link Velocity} of the specified {@link Component} instances by the given {@link Acceleration}.
 * @param params The config options.
 * @param params.acceleration The amount of {@link Acceleration} to apply to each {@link Kinematic} {@link Component} instance in the array
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link Component} instances to update
 * @param params.componentIds The {@link Uuid} id values of the {@link Component} instances to update
 */
export const accelerate = ({
  acceleration,
  componentIndex,
  componentIds,
}: {
  acceleration: Acceleration;
  componentIndex: ComponentIndex;
  componentIds: Uuid[];
}) => {
  return componentIds.reduce<ComponentIndex>((reduction, componentId) => {
    const component = getComponent<Kinematic>({
      componentId,
      componentIndex,
    });

    const velocity = fixVector({
      x: component.velocity.x + acceleration.x,
      y: component.velocity.y + acceleration.y,
    });

    return updateComponent({
      componentIndex: reduction,
      component: {
        ...component,
        velocity,
      },
    });
  }, componentIndex);
};
