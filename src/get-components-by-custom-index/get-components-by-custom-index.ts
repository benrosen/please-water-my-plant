import {Component} from "component";
import {ComponentIndex} from "component-index";
import {getComponent} from "get-component";

/**
 * Retrieve {@link Component} instances from a {@link ComponentIndex} using a custom index name.
 * @param params The config options.
 * @param params.componentIndex The {@link ComponentIndex} that contains the custom index.
 * @param params.indexName The name of the custom index.
 */
export const getComponentsByCustomIndex = <GenericType>({
  componentIndex,
  indexName,
}: {
  componentIndex: ComponentIndex;
  indexName: string;
}): (Component & GenericType)[] => {
  const customIndexes = componentIndex?.custom;

  if (!customIndexes) {
    return [];
  }

  const customIndex = customIndexes[indexName];

  if (customIndex) {
    return customIndex.map((componentId) => {
      return getComponent<GenericType>({ componentId, componentIndex });
    });
  } else {
    return [];
  }
};
