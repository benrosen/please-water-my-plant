import {isEntityRelated} from "../entity-related";
import {isIdentifiedByUuid} from "../identified-by-uuid";
import {Component} from "./component";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Component}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isComponent = (value: unknown): value is Component => {
  return isIdentifiedByUuid(value) && isEntityRelated(value);
};
