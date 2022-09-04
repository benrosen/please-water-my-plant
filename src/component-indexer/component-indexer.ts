import {Component} from "../component";

/**
 * A function that accepts a {@link Component} and returns `true` or `false`.
 */
export type ComponentIndexer = (component: Component) => boolean;
