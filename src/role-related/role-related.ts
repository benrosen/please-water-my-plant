import { Role } from "role";

export interface RoleRelated<GenericRole extends Role = Role> {
  role: GenericRole;
}
