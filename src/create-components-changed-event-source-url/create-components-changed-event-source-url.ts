import {ComponentsResourcePath} from "components-resource-path";
import {RoleRelated} from "role-related";
import {Uuid} from "uuid";

/**
 * Create a {@link ComponentsResourcePath} with query string parameters
 * @param params The config options
 * @param params.clientId A {@link Uuid} that uniquely identifies the event consumer
 * @param params.role The {@link Role} to be assumed by the client
 * @see https://expressjs.com/en/api.html#req.query
 */
export const createComponentsChangedEventSourceUrl = ({
  clientId,
  role,
}: RoleRelated & { clientId: Uuid }): string => {
  return ComponentsResourcePath + `?clientId=${clientId}&role=${role}`;
};
