import {EntityRelated} from "../entity-related";
import {IdentifiedByGuid} from "../identified-by-guid";

/**
 * A component labels an entity as possessing a particular aspect, and holds the data needed to model that aspect.
 * @see https://en.wikipedia.org/wiki/Entity_component_system#Characteristics
 */
export interface Component extends IdentifiedByGuid, EntityRelated {}
