import {BadRequestStatusCode} from "bad-request-status-code";
import {ForbiddenStatusCode} from "forbidden-status-code";
import {NotFoundStatusCode} from "not-found-status-code";
import {UnauthorizedStatusCode} from "unauthorized-status-code";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses
 */
export type ClientErrorStatusCode =
  | BadRequestStatusCode
  | UnauthorizedStatusCode
  | ForbiddenStatusCode
  | NotFoundStatusCode;
