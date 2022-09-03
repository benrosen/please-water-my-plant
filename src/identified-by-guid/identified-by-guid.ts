import {Guid} from "../guid";
import {IdentifiedBy} from "../identified-by";

/**
 * An object with an `id` property whose value is a {@link Guid}.
 */
export type IdentifiedByGuid = IdentifiedBy<Guid>;
