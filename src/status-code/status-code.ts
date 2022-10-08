import {ClientErrorStatusCode} from "client-error-status-code";
import {InformationStatusCode} from "information-status-code";
import {RedirectionStatusCode} from "redirection-status-code";
import {ServerErrorStatusCode} from "server-error-status-code";
import {SuccessfulStatusCode} from "successful-status-code";

/**
 * Indicate whether a specific HTTP request has been successfully completed.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export type StatusCode =
  | InformationStatusCode
  | SuccessfulStatusCode
  | RedirectionStatusCode
  | ClientErrorStatusCode
  | ServerErrorStatusCode;
