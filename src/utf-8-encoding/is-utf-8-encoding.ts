import {Utf8Encoding, UTF_8_ENCODING} from "./utf-8-encoding";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link Utf8Encoding}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isUtf8Encoding = (value: unknown): value is Utf8Encoding => {
  return typeof value === "string" && value === UTF_8_ENCODING;
};
