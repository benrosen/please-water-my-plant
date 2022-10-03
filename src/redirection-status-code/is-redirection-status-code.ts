import {isFoundStatusCode} from "../found-status-code";
import {isMovedPermanentlyStatusCode} from "../moved-permanently-status-code";
import {isMultipleChoicesStatusCode} from "../multiple-choices-status-code";
import {isNotModifiedStatusCode} from "../not-modified-status-code";
import {isPermanentRedirectStatusCode} from "../permanent-redirect-status-code";
import {isSeeOtherStatusCode} from "../see-other-status-code";
import {isTemporaryRedirectStatusCode} from "../temporary-redirect-status-code";
import {RedirectionStatusCode} from "./redirection-status-code";

/**
 * Return `true` if the given value (of `unknown` type) is of type {@link RedirectionStatusCode}. Otherwise, return `false`.
 * @param value A value of `unknown` type.
 */
export const isRedirectionStatusCode = (
  value: unknown
): value is RedirectionStatusCode => {
  return (
    isMultipleChoicesStatusCode(value) ||
    isMovedPermanentlyStatusCode(value) ||
    isFoundStatusCode(value) ||
    isSeeOtherStatusCode(value) ||
    isNotModifiedStatusCode(value) ||
    isTemporaryRedirectStatusCode(value) ||
    isPermanentRedirectStatusCode(value)
  );
};
