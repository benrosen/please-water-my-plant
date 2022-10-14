import {TYPESCRIPT_FILE_EXTENSION, TypescriptFileExtension,} from "./typescript-file-extension";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link TypescriptFileExtension}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isTypescriptFileExtension = (
  value: unknown
): value is TypescriptFileExtension => {
  return typeof value === "string" && value === TYPESCRIPT_FILE_EXTENSION;
};
