import {isJavascriptFileExtension} from "../javascript-file-extension";
import {isTypescriptFileExtension} from "../typescript-file-extension";
import {FileExtension} from "./file-extension";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link FileExtension}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isFileExtension = (value: unknown): value is FileExtension => {
  return isJavascriptFileExtension(value) || isTypescriptFileExtension(value);
};
