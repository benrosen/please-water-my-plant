import {Component} from "component";
import {Name} from "name";
import {Named} from "named";
import {Timestamped} from "timestamped";

/**
 * An {@link Order} is a {@link Timestamped} {@link Component}.
 * The `entityId` of an {@link Order} references the client that created the {@link Order}.
 */
export interface Order<GenericName extends Name = Name>
  extends Component,
    Named<GenericName>,
    Timestamped {}
