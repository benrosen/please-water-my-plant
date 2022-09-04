import {Component} from "../component";
import {ComponentIndex} from "../component-index";
import {ComponentIndexer} from "../component-indexer";

/**
 * Create a {@link ComponentIndex} from a {@link Component} array and a {@link ComponentIndexer} array.
 * @param params The config options.
 * @param params.components The {@link Component} array to index.
 * @param params.indexers The {@link ComponentIndexer} functions that will create the custom indexes.
 */
export const createComponentIndex = <GenericComponent extends Component>({
  components,
  indexers,
}: {
  components: GenericComponent[];
  indexers?: ComponentIndexer[];
}) => {
  return components.reduce<ComponentIndex<GenericComponent>>(
    (index, component) => {
      index.byComponentId[component.id] = component;

      index.byEntityId[component.entityId] = [
        ...(index.byEntityId[component.entityId] ?? []),
        component.id,
      ];

      indexers?.forEach((indexer) => {
        if (indexer(component)) {
          index.custom[indexer.name] = [
            ...(index.custom[indexer.name] ?? []),
            component.id,
          ];
        }
      });

      return index;
    },
    { byComponentId: {}, byEntityId: {}, ...(indexers ? { custom: {} } : {}) }
  );
};
