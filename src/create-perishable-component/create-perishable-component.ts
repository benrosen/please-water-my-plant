import {Component} from "component";
import {ComponentIndex} from "component-index";
import {createComponentIndex} from "create-component-index";
import {createTimestamp} from "create-timestamp";
import {EntityRelated} from "entity-related";
import {getIndexers} from "get-indexers";
import {Integer} from "integer";
import {Milliseconds} from "milliseconds";
import {Perishable} from "perishable";
import {PositiveNumber} from "positive-number";
import {createUuid} from "uuid";

/**
 * Create a {@link Perishable} {@link Component} for the specified entity in the given {@link ComponentIndex}
 * @param params The config options
 * @param params.componentIndex The {@link ComponentIndex} that will contain the new {@link Perishable} {@link Component}
 * @param params.entityId The id of the {@link Perishable} entity
 * @param params.lifespan The number of {@link Milliseconds} that this entity will exist before being considered {@link Expired}
 */
export const createPerishableComponent = ({
  componentIndex,
  entityId,
  lifespan,
}: EntityRelated & {
  componentIndex: ComponentIndex;
  lifespan: Milliseconds & PositiveNumber & Integer;
}): ComponentIndex<Partial<Perishable> & Component> => {
  const components = Object.values(componentIndex.byComponentId);

  const currentTimestamp = createTimestamp();

  const expirationTimestamp = currentTimestamp + lifespan;

  const perishableComponent: Perishable & Component = {
    entityId,
    id: createUuid(),
    expiresAt: expirationTimestamp,
  };

  return createComponentIndex<Partial<Perishable> & Component>({
    components: [...components, perishableComponent],
    indexers: getIndexers(),
  });
};
