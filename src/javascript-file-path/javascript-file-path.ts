import {EndsWith} from "ends-with";
import {JavascriptFileExtension} from "javascript-file-extension";

/**
 * A string that {@link EndsWith} a {@link TypescriptFileExtension}.
 */
export type JavascriptFilePath = EndsWith<JavascriptFileExtension>;
