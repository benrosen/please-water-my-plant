import {Component} from "component";
import {Timestamped} from "timestamped";

/**
 * An {@link Order} is a {@link Timestamped} {@link Component}.
 */
export interface Order extends Component, Timestamped {}
