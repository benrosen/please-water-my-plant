import {isEndsWith} from "ends-with";
import {JAVASCRIPT_FILE_EXTENSION} from "javascript-file-extension";
import {JavascriptFilePath} from "./javascript-file-path";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link JavascriptFilePath}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isJavascriptFilePath = (
  value: unknown
): value is JavascriptFilePath => {
  return isEndsWith(value, JAVASCRIPT_FILE_EXTENSION);
};
