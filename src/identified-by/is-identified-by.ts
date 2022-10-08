import {IdentifiedBy} from "identified-by";
import {Identifier, isIdentifier} from "identifier";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link IdentifiedBy}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isIdentifiedBy = <
  GenericIdentifier extends Identifier = Identifier
>(
  value: unknown
): value is IdentifiedBy<GenericIdentifier> => {
  return isIdentifier(value["id"]);
};
