import {isName, Name} from "../name";
import {Named} from "./named";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Named}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isNamed = <GenericName extends Name = Name>(
  value: unknown
): value is Named<GenericName> => {
  return isName(value["name"]);
};
