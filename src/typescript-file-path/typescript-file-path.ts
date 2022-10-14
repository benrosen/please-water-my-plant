import {EndsWith} from "ends-with";
import {TypescriptFileExtension} from "typescript-file-extension";

/**
 * A string that {@link EndsWith} a {@link TypescriptFileExtension}.
 */
export type TypescriptFilePath = EndsWith<TypescriptFileExtension>;
