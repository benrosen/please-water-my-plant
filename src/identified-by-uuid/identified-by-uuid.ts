import {IdentifiedBy} from "identified-by";
import {Uuid} from "uuid";

/**
 * An object with an `id` property whose value is a {@link Uuid}.
 */
export interface IdentifiedByUuid extends IdentifiedBy<Uuid> {}
