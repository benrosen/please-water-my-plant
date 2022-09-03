import {EntityRelated} from "../entity-related";
import {IdentifiedByGuid} from "../identified-by-guid";

/**
 * A uniquely-identified object that confers behavior to a related entity.
 */
export type Component = IdentifiedByGuid & EntityRelated;
