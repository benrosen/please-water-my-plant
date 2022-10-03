import {ContinueStatusCode} from "../continue-status-code";
import {EarlyHintsStatusCode} from "../early-hints-status-code";
import {ProcessingStatusCode} from "../processing-status-code";
import {SwitchingProtocolsStatusCode} from "../switching-protocols-status-code";

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses
 */
export type InformationStatusCode =
  | ContinueStatusCode
  | SwitchingProtocolsStatusCode
  | ProcessingStatusCode
  | EarlyHintsStatusCode;
