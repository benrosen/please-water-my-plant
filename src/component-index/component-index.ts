import {Component} from "../component";
import {Guid} from "../guid";

/**
 * Provides efficient access to a collection of {@link Component} instances.
 */
export interface ComponentIndex {
  /**
   * A mapping of {@link Component} ids to {@link Component} instances.
   *
   * This can be useful when you want to retrieve a single {@link Component} instance by its id.
   */
  byComponentId: Record<Guid, Component>;

  /**
   * A mapping of entity ids to {@link Component} id arrays.
   *
   * This can be useful when you want to retrieve all of the {@link Component} ids that are associated with an entity id.
   */
  byEntityId: Record<Guid, Guid[]>;

  /**
   * A mapping of custom index names to {@link Component} id arrays.
   *
   * This can be useful when you want to group {@link Component} ids by something other than entity id or {@link Component} id.
   */
  custom?: Record<string, Guid[]>;
}
