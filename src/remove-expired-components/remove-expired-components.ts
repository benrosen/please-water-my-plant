import {Component} from "component";
import {ComponentIndex} from "component-index";
import {Expired} from "expired";
import {getExpiredComponents} from "get-expired-components";
import {removeComponent} from "remove-component";

/**
 * Remove {@link Expired} {@link Component} instances from the given {@link ComponentIndex}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} from which to remove {@link Expired} {@link Component} instances
 */
export const removeExpiredComponents = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex<Partial<Expired> & Component>;
}) => {
  const expiredComponents = getExpiredComponents({
    componentIndex,
  });

  return expiredComponents.reduce<ComponentIndex>(
    (reducedComponentIndex, expiredComponent) => {
      return removeComponent({
        componentId: expiredComponent.id,
        componentIndex: reducedComponentIndex,
      });
    },
    componentIndex
  );
};
