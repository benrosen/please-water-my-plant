import {isRole} from "../role";
import {RoleRelated} from "./role-related";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link RoleRelated}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isRoleRelated = (value: unknown): value is RoleRelated => {
  return isRole(value["role"]);
};
