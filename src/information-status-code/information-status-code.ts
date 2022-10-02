import { ContinueStatusCode } from "../continue-status-code";
import { EarlyHintsStatusCode } from "../early-hints-status-code";
import { ProcessingStatusCode } from "../processing-status-code";
import { SwitchingProtocolsStatusCode } from "../switching-protocols-status-code";

export type InformationStatusCode =
  | ContinueStatusCode
  | SwitchingProtocolsStatusCode
  | ProcessingStatusCode
  | EarlyHintsStatusCode;
