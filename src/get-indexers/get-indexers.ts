import {ComponentIndexer} from "component-indexer";
import {isOrder} from "order";

/**
 * Return an array of {@link ComponentIndexer} functions.
 */
export const getIndexers = (): ComponentIndexer[] => {
  return [isOrder];
};
