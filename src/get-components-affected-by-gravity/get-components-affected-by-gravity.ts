import {AffectedByGravity, isAffectedByGravity} from "../affected-by-gravity";
import {Component} from "../component";
import {ComponentIndex} from "../component-index";
import {getComponentsByCustomIndex} from "../get-components-by-custom-index";

/**
 * Retrieve an array of {@link Component} instances that are {@link AffectedByGravity}.
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link Component} instances that are {@link AffectedByGravity}.
 */
export const getComponentsAffectedByGravity = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex;
}): (Component & AffectedByGravity)[] => {
  return getComponentsByCustomIndex<AffectedByGravity>({
    componentIndex,
    indexName: isAffectedByGravity.name,
  });
};
