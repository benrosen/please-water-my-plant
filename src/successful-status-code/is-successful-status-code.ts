import {isAcceptedStatusCode} from "../accepted-status-code/is-accepted-status-code";
import {isCreatedStatusCode} from "../created-status-code";
import {isNoContentStatusCode} from "../no-content-status-code";
import {isNonAuthoritativeInformationStatusCode} from "../non-authoritative-information-status-code";
import {isOkStatusCode} from "../ok-status-code/is-ok-status-code";
import {isPartialContentStatusCode} from "../partial-content-status-code";
import {isResetContentStatusCode} from "../reset-content-status-code";
import {SuccessfulStatusCode} from "./successful-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link SuccessfulStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isSuccessfulStatusCode = (
  value: unknown
): value is SuccessfulStatusCode => {
  return (
    isOkStatusCode(value) ||
    isCreatedStatusCode(value) ||
    isAcceptedStatusCode(value) ||
    isNonAuthoritativeInformationStatusCode(value) ||
    isNoContentStatusCode(value) ||
    isResetContentStatusCode(value) ||
    isPartialContentStatusCode(value)
  );
};
