import {
  isSwitchingProtocolsStatusCode,
  SWITCHING_PROTOCOLS_STATUS_CODE,
  SwitchingProtocolsStatusCode,
} from "switching-protocols-status-code";

const validExamples: SwitchingProtocolsStatusCode[] = [
  SWITCHING_PROTOCOLS_STATUS_CODE,
];

const invalidExamples = [0, 1, 100, 1001, 200, 404];

describe("The isSwitchingProtocolsStatusCode type-guard function", () => {
  describe("should return true", () => {
    test.each(validExamples)(
      "when the given value, %j, implements the SwitchingProtocolsStatusCode interface",
      (validExample) => {
        const result = isSwitchingProtocolsStatusCode(validExample);
        expect(result).toBeTruthy();
      }
    );
  });

  describe("should return false", () => {
    test.each(invalidExamples)(
      "when the given value, %j, does not implement the SwitchingProtocolsStatusCode interface",
      (invalidExample) => {
        const result = isSwitchingProtocolsStatusCode(invalidExample);
        expect(result).toBeFalsy();
      }
    );
  });
});
