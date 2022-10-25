import {ComponentIndexer} from "component-indexer";
import {isConnectOrder} from "connect-order";
import {isDisconnectOrder} from "disconnect-order";
import {isOrder} from "order";

/**
 * Return an array of {@link ComponentIndexer} functions.
 */
export const getIndexers = (): ComponentIndexer[] => {
  return [isConnectOrder, isDisconnectOrder, isOrder];
};
