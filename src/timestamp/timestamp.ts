import {Integer} from "integer";
import {Milliseconds} from "milliseconds";
import {PositiveNumber} from "positive-number";

/**
 * Represents the number of {@link Milliseconds} since the beginning of the Unix Epoch.
 */
export type Timestamp = Milliseconds & PositiveNumber & Integer;
