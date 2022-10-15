import {Serializable} from "./serializable";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Serializable}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isSerializable = (value: unknown): value is Serializable => {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    value === null ||
    typeof value === "boolean" ||
    (Array.isArray(value) && value.every(isSerializable)) ||
    (typeof value === "object" &&
      Object.entries(value).every(([key, value]) => {
        return typeof key === "string" && isSerializable(value);
      }))
  );
};
