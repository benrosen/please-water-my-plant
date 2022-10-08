import {EntityRelated} from "entity-related";
import {isUuid} from "uuid";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link EntityRelated}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isEntityRelated = (value: unknown): value is EntityRelated => {
  return isUuid(value["entityId"]);
};
