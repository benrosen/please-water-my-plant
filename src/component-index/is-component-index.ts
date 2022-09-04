import {ComponentIndex} from "./component-index";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link ComponentIndex}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isComponentIndex = (value: unknown): value is ComponentIndex => {
  const maybeComponentIndex = value as ComponentIndex;
  return (
    !!maybeComponentIndex.byComponentId && !!maybeComponentIndex.byEntityId
  );
};
