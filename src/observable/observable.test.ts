import { ChangeEventName } from "../change-event-name";
import { Observable } from "./observable";

describe("The generic Observable class", () => {
  describe("should return the expected value", () => {
    test.each([
      0,
      123,
      123.765,
      "foo",
      false,
      ["foo", "bar"],
      { foo: "bar" },
    ] as unknown[])("after the class is instantiated", (initialValue) => {
      const observable = new Observable(initialValue);

      expect(observable.value).toStrictEqual(initialValue);
    });

    test.each([
      [0, 1],
      [123, 0],
      [123.765, 0.1234],
      ["foo", "bar"],
      [false, true],
      [
        ["foo", "bar"],
        ["baz", "barbaz"],
      ],
      [{ foo: "bar" }, { foo: "baz" }],
    ] as [unknown, unknown][])(
      "after the value is set",
      (initialValue, nextValue) => {
        const observable = new Observable(initialValue);

        observable.value = nextValue;

        expect(observable.value).toStrictEqual(nextValue);
      }
    );
  });

  describe("should emit an event named", () => {
    describe("on changed", () => {
      test.each([
        [0, 1],
        [123, 0],
        [123.765, 0.1234],
        ["foo", "bar"],
        [false, true],
        [
          ["foo", "bar"],
          ["baz", "barbaz"],
        ],
        [{ foo: "bar" }, { foo: "baz" }],
      ] as [unknown, unknown][])(
        "after the value is set",
        (initialValue, nextValue) => {
          const observable = new Observable(initialValue);

          observable.on(ChangeEventName, (event) => {
            expect(event).toStrictEqual(nextValue);
          });

          observable.value = nextValue;
        }
      );
    });
  });
});
