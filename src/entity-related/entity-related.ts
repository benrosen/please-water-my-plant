import {Uuid} from "../uuid";

/**
 * An object with an `entityId` property whose value is a {@link Uuid}.
 */
export interface EntityRelated {
  entityId: Uuid;
}
