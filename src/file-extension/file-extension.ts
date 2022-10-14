import {JavascriptFileExtension} from "../javascript-file-extension";
import {TypescriptFileExtension} from "../typescript-file-extension";

/**
 * A filename extension, file name extension or file extension is a suffix to the name of a computer file (e.g., .txt, .docx, .md).
 * The extension indicates a characteristic of the file contents or its intended use.
 * @see https://en.wikipedia.org/wiki/Filename_extension
 */
export type FileExtension = JavascriptFileExtension | TypescriptFileExtension;
