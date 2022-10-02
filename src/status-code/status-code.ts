import {InformationStatusCode} from "../information-status-code";
import {SuccessfulStatusCode} from "../successful-status-code";

/**
 * Indicate whether a specific HTTP request has been successfully completed.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses
 */
export type StatusCode = InformationStatusCode | SuccessfulStatusCode;
