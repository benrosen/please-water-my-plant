import {Timestamp} from "timestamp";

/**
 * An object that expires at a {@link Timestamp}
 */
export interface Perishable<GenericTimestamp extends Timestamp = Timestamp> {
  expiresAt: GenericTimestamp;
}
