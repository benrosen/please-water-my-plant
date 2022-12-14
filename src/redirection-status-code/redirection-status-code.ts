import {FoundStatusCode} from "found-status-code";
import {MovedPermanentlyStatusCode} from "moved-permanently-status-code";
import {MultipleChoicesStatusCode} from "multiple-choices-status-code";
import {NotModifiedStatusCode} from "not-modified-status-code";
import {PermanentRedirectStatusCode} from "permanent-redirect-status-code";
import {SeeOtherStatusCode} from "see-other-status-code";
import {TemporaryRedirectStatusCode} from "temporary-redirect-status-code";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages
 */
export type RedirectionStatusCode =
  | MultipleChoicesStatusCode
  | MovedPermanentlyStatusCode
  | FoundStatusCode
  | SeeOtherStatusCode
  | NotModifiedStatusCode
  | TemporaryRedirectStatusCode
  | PermanentRedirectStatusCode;
