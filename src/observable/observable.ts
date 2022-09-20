import {EventEmitter} from "events";
import {OnChangeEventName} from "../on-change-event-name";

/**
 * An object that emits an `onChange` event whenever its value changes.
 */
export class Observable<GenericType> extends EventEmitter {
  /**
   * Create an object that emits an `onChange` event whenever its value changes.
   * @param initialValue The initial value.
   */
  constructor(initialValue: GenericType) {
    super();

    this.value = initialValue;
  }

  private _value: GenericType;

  public get value(): GenericType {
    return this._value;
  }

  public set value(value: GenericType) {
    this.emit(OnChangeEventName, JSON.stringify((this._value = value)));
  }
}
