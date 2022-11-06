import {Component} from "component";
import {ComponentIndex} from "component-index";
import {Expired, isExpired} from "expired";
import {getComponentsByCustomIndex} from "get-components-by-custom-index";

/**
 * Retrieve an array of {@link Expired} {@link Component} instances.
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that contains the {@link Expired} {@link Component} instances.
 */
export const getExpiredComponents = ({
  componentIndex,
}: {
  componentIndex: ComponentIndex<Expired & Component>;
}) => {
  return getComponentsByCustomIndex<Expired & Component>({
    componentIndex,
    indexName: isExpired.name,
  });
};
