import {AcceptedStatusCode} from "accepted-status-code";
import {CreatedStatusCode} from "created-status-code";
import {NoContentStatusCode} from "no-content-status-code";
import {NonAuthoritativeInformationStatusCode} from "non-authoritative-information-status-code";
import {OkStatusCode} from "ok-status-code";
import {PartialContentStatusCode} from "partial-content-status-code";
import {ResetContentStatusCode} from "reset-content-status-code";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses
 */
export type SuccessfulStatusCode =
  | OkStatusCode
  | CreatedStatusCode
  | AcceptedStatusCode
  | NonAuthoritativeInformationStatusCode
  | NoContentStatusCode
  | ResetContentStatusCode
  | PartialContentStatusCode;
