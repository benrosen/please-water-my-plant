import {isContinueStatusCode} from "continue-status-code";
import {isEarlyHintsStatusCode} from "early-hints-status-code";
import {InformationStatusCode} from "information-status-code";
import {isProcessingStatusCode} from "processing-status-code";
import {isSwitchingProtocolsStatusCode} from "switching-protocols-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link InformationStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isInformationStatusCode = (
  value: unknown
): value is InformationStatusCode => {
  return (
    isContinueStatusCode(value) ||
    isSwitchingProtocolsStatusCode(value) ||
    isProcessingStatusCode(value) ||
    isEarlyHintsStatusCode(value)
  );
};
