import {SWITCHING_PROTOCOLS_STATUS_CODE, SwitchingProtocolsStatusCode} from "./switching-protocols-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link SwitchingProtocolsStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isSwitchingProtocolsStatusCode = (
  value: unknown
): value is SwitchingProtocolsStatusCode => {
  return typeof value === "number" && value === SWITCHING_PROTOCOLS_STATUS_CODE;
};
