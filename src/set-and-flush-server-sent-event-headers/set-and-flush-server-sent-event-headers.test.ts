// mock response.flushHeaders
// mock response.set

describe("The setAndFlushServerSentEventHeaders function", () => {
  describe("should call", () => {
    test("response.set with ServerSentEventHeaders", () => {
      expect(true).toStrictEqual(false);
    });

    test("response.flushHeaders", () => {
      expect(true).toStrictEqual(false);
    });
  });

  describe("should throw", () => {
    test("when response.set throws", () => {
      expect(true).toStrictEqual(false);
    });

    test("when response.flushHeaders throws", () => {
      expect(true).toStrictEqual(false);
    });
  });
});
