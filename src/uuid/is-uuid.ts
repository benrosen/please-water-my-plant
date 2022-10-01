import {Uuid} from "./uuid";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Uuid}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isUuid = (value: unknown): value is Uuid => {
  return (
    typeof value === "string" &&
    new RegExp(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    ).test(value)
  );
};
