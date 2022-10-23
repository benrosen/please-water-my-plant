import {Name} from "name";

/**
 * An object with a `name` property whose value is a {@link Name}.
 */
export interface Named<GenericName extends Name = Name> {
  name: GenericName;
}
