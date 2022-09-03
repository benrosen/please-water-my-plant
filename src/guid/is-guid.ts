import {Guid} from "./guid";

/**
 * Return `true` if the given value (of unknown type) is of type {@link Guid}. Otherwise, return `false`.
 * @param value A value of unknown type.
 */
export const isGuid = (value: unknown): value is Guid => {
  return typeof value === "string" && !!value;
};
