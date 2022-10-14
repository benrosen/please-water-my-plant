import {isEndsWith} from "ends-with";
import {TYPESCRIPT_FILE_EXTENSION} from "typescript-file-extension";
import {TypescriptFilePath} from "./typescript-file-path";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link TypescriptFilePath}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isTypescriptFilePath = (
  value: unknown
): value is TypescriptFilePath => {
  return isEndsWith(value, TYPESCRIPT_FILE_EXTENSION);
};
