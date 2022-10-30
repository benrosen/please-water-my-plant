import {createComponentsChangedEventSourceUrl} from "create-components-changed-event-source-url";
import {IdentifiedByUuid} from "identified-by-uuid";
import {RoleRelated} from "role-related";

/**
 * Return a new {@link EventSource} that is subscribed to the components changed event source url
 * @param params The config options
 * @param id The id of the client
 * @param role The {@link Role} that the client should assume when it connects to the server
 */
export const createComponentsChangedEventSource = ({
  id,
  role,
}: IdentifiedByUuid & RoleRelated) => {
  const componentsChangedEventSourceUrl = createComponentsChangedEventSourceUrl(
    {
      clientId: id,
      role,
    }
  );

  return new EventSource(componentsChangedEventSourceUrl);
};
