import {PastTimestamp} from "past-timestamp";
import {Perishable} from "perishable";

/**
 * A {@link Perishable} object whose `expiresAt` value is a {@link PastTimestamp}
 */
export interface Expired extends Perishable<PastTimestamp> {}
