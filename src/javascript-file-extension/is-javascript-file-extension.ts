import {JAVASCRIPT_FILE_EXTENSION, JavascriptFileExtension} from "./javascript-file-extension";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link JavascriptFileExtension}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isJavascriptFileExtension = (
  value: unknown
): value is JavascriptFileExtension => {
  return typeof value === "string" && value === JAVASCRIPT_FILE_EXTENSION;
};
