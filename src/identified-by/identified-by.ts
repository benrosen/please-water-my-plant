import {Identifier} from "identifier";

/**
 * An object with an `id` property whose value is a generic {@link Identifier}.
 */
export interface IdentifiedBy<GenericIdentifier extends Identifier> {
  id: GenericIdentifier;
}
