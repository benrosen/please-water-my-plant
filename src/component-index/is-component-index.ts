import {isComponent} from "../component";
import {isUuid} from "../uuid";
import {ComponentIndex} from "./component-index";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ComponentIndex}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isComponentIndex = (value: unknown): value is ComponentIndex => {
  try {
    const maybeComponentIndex = value as ComponentIndex;

    const hasComponentsIndexedByComponentId = Object.entries(
        maybeComponentIndex.byComponentId
    ).every(([key, value]) => {
      return isUuid(key) && isComponent(value);
    });

    if (!hasComponentsIndexedByComponentId) {
      return false;
    }

    const hasComponentIdsIndexedByEntityId = Object.entries(
        maybeComponentIndex.byEntityId
    ).every(([key, value]) => {
      return isUuid(key) && Array.isArray(value) && value.every(isUuid);
    });

    if (!hasComponentIdsIndexedByEntityId) {
      return false;
    }

    if (maybeComponentIndex.custom) {
      return Object.entries(maybeComponentIndex.custom).every(([key, value]) => {
        return typeof key === "string" && value.every(isUuid);
      })
    } else {
      return true
    }
  } catch {
    return false;
  }
};
